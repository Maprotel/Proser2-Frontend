import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserSelectionModel, AlertModel } from "shared/models";

import { AlertService } from "shared/services/helpers/alert.service";
// import { EnvService } from "shared/services/helpers/env.service";
import { UserSelectionService } from "shared/services/crud/system/user-selection.service";

import {
  dateToDatePicker,
  objectTimeToTextTime,
  objectDateToTextDate,
  selectorOptionSubtitles,
  selectorLegendSubtitles
} from "shared/functions";

import { AuthService } from "shared/services";
import * as moment from "moment";

import groupList from "shared/data/selector-group-list.data";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"]
})
export class SelectorComponent implements OnInit, OnDestroy {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() userSelectionBack: EventEmitter<any> = new EventEmitter();

  @Output() acceptSelector: EventEmitter<any> = new EventEmitter();
  @Output() cancelSelector: EventEmitter<any> = new EventEmitter();

  @Input() userSelection: UserSelectionModel;
  @Input() selectorVisibleFields: UserSelectionModel;
  // @Input() menuOptions: UserSelectionModel;
  @Input() selectorVisibleAreas;

  menuOptions;

  jsonSelector = false;
  groupList;
  list

  // time
  start_time_text = "00:00:00";
  end_time_text = "23:59:59";

  action;

  alertMessage: AlertModel;
  alertError;
  // env;
  error_detected = false;
  error_message;

  selectorForm: FormGroup;

  show_submit_button = false;
  showSelector = false;

  selection;
  previousUserSelection;

  model: any = new UserSelectionModel(); // Used for field labels
  report_title: string;

  incomingUserSelection: UserSelectionModel;

  // groupList;

  constructor(
    private formBuilder: FormBuilder,
    private userSelectionService: UserSelectionService,
    private alertService: AlertService,
    // private envService: EnvService,
    private authService: AuthService
  ) {
    this.selection = new UserSelectionModel("userSelection");
    this.menuOptions = new UserSelectionModel("menuOptions");
    this.incomingUserSelection = new UserSelectionModel();

    this.alertMessage = new AlertModel();
    this.model = new UserSelectionModel();
  }

  ngOnInit() {
    this.menuOptions = this.userSelectionService.readMenuOptions();
    this.onFillForm(this.userSelection);
    this.onChange();
  }

  ngOnDestroy() {
    // this.userSelection = this.selectorForm.value
  }

  // Selector
  onResetSelector() {
    this.userSelection = new UserSelectionModel("userSelection");
    this.menuOptions = new UserSelectionModel("menuOptions");
    this.onGetUserSelectionMenus();
    this.onFillForm(this.userSelection);
    this.onChange();
  }

  onAcceptSelector() {
    this.acceptSelector.emit(this.userSelection);
  }

  onCancelSelector() {
    this.cancelSelector.emit("cancelSelector");
  }

  onSubmit(currentSelection) {
    // this.onAcceptSelector();
  }

  // Reset form
  onFillForm(currentSelection) {
    if (currentSelection) {
      this.start_time_text = currentSelection.start_time.value;
      this.end_time_text = currentSelection.end_time.value;

      this.selectorForm = this.formBuilder.group({
        title: [currentSelection.title],
        entity_selection: [currentSelection.entity_selection],
        options: [currentSelection.options],
        legend: [currentSelection.legend],
        login: [currentSelection.login],

        mode: [currentSelection.mode],
        type: [currentSelection.type],

        start_date: [currentSelection.start_date],
        end_date: [currentSelection.end_date],
        start_time: [currentSelection.start_time],
        end_time: [currentSelection.end_time],

        auxiliar: [currentSelection.auxiliar],
        assignation: [currentSelection.assignation],

        client: [currentSelection.client],
        queue: [currentSelection.queue],
        service: [currentSelection.service],
        campaign: [currentSelection.campaign],

        supervisor: [currentSelection.supervisor],
        agent: [currentSelection.agent],
        role: [currentSelection.role],
        schedule: [currentSelection.schedule],

        status: [currentSelection.status],

        last_minutes: [currentSelection.last_minutes],
        interval: [currentSelection.interval],

        groupBy: [currentSelection.groupBy],
        orderBy: [currentSelection.orderBy],
        limitBy: [currentSelection.limitBy],

        start_time_hour: [currentSelection.start_time_hour],
        end_time_hour: [currentSelection.end_time_hour],

        current_date: [dateToDatePicker(moment().format("YYYY-MM-DD"))]
      });
    }

    this.showSelector = true;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.selectorForm.controls;
  }

  onChange() {
    this.selectorForm.patchValue({
      options: selectorOptionSubtitles(this.selectorForm.value)
    });
    this.selectorForm.patchValue({
      legend: selectorLegendSubtitles(this.selectorForm.value)
    });
    this.userSelection = this.selectorForm.value;
    this.userSelection.options = this.selectorForm.value.options;
    this.userSelection.legend = this.selectorForm.value.legend;
  }

  onAllDay() {
    this.selectorForm.patchValue({
      start_time_hour: {
        hour: 0,
        minute: 0,
        second: 0,
        value: "00:00:00"
      }
    });

    this.selectorForm.patchValue({
      end_time_hour: {
        hour: 23,
        minute: 59,
        second: 59,
        value: "23:59:59"
      }
    });

    this.selectorForm.patchValue({
      groupBy: groupList[0]
    });

    this.onChange();
  }

  onNewStartDate() {
    this.selectorForm.patchValue({
      end_date: this.selectorForm.value.start_date
    });

    this.userSelection.start_date = this.selectorForm.value.start_date;
    this.userSelection.end_date = this.selectorForm.value.end_date;

    this.onChange();
  }

  // Updates selection when new end date is selected
  onNewEndDate() {
    this.userSelection.start_date = this.selectorForm.value.start_date;
    this.userSelection.end_date = this.selectorForm.value.end_date;
    this.onChange();
  }

  onChangeStartTime() {
    this.start_time_text = objectTimeToTextTime(
      this.selectorForm.value.start_time_hour
    );

    this.selectorForm.patchValue({
      start_time: {
        id: 0,
        value: this.start_time_text
      }
    });

    this.userSelection.start_time = this.selectorForm.value.start_time;

    this.onChange();
  }

  onChangeEndTime() {
    this.end_time_text = objectTimeToTextTime(
      this.selectorForm.value.end_time_hour
    );
    this.selectorForm.patchValue({
      end_time: {
        id: 0,
        value: this.end_time_text
      }
    });
    this.userSelection.end_time = this.selectorForm.value.end_time;
    this.onChange();
  }

  onInterval() {
    this.onAllDay();

    let start_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
    let end_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
    let start_time = { id: 0, value: "00:00:00" };
    let end_time = { id: 0, value: "23:59:59" };

    this.selectorForm.patchValue({
      start_date: start_date
    });

    this.selectorForm.patchValue({
      end_date: end_date
    });

    this.selectorForm.patchValue({
      start_time: start_time
    });

    this.selectorForm.patchValue({
      end_time: end_time
    });

    this.userSelection.start_date = start_date;
    this.userSelection.end_date = end_date;
    this.userSelection.start_time = start_time;
    this.userSelection.end_time = end_time;

    this.onChange();
  }

  onLastMinutes() {
    // this.onAllDay();

    this.userSelection.last_minutes = this.selectorForm.value.last_minutes;

    // let start_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
    // let end_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
    // let start_time = { id: 0, value: "00:00:00" };
    // let end_time = { id: 0, value: "23:59:59" };
    // let interval = null;

    // this.selectorForm.patchValue({
    //   interval: interval
    // });

    // this.selectorForm.patchValue({
    //   start_date: start_date
    // });

    // this.selectorForm.patchValue({
    //   end_date: end_date
    // });

    // this.selectorForm.patchValue({
    //   start_time: start_time
    // });

    // this.selectorForm.patchValue({
    //   end_time: end_time
    // });

    // this.userSelection.interval = interval;
    // this.userSelection.start_date = start_date;
    // this.userSelection.end_date = end_date;
    // this.userSelection.start_time = start_time;
    // this.userSelection.end_time = end_time;

    // if (this.userSelection.last_minutes === null) {
    //   this.selectorVisibleFields.start_time = false;
    //   this.selectorVisibleFields.end_time = false;
    // } else {
    //   this.selectorVisibleFields.start_time = true;
    //   this.selectorVisibleFields.end_time = true;
    // }

    // this.onChange();
  }

  // Get menu options from database
  onGetUserSelectionMenus() {
    this.userSelectionService
      .getUserSelectionMenus(this.userSelection)
      .subscribe(
        data => {
          this.menuOptions = data;
          console.log("data", data);
          this.userSelectionService.writeMenuOptions(this.menuOptions);
          this.menuOptions = this.userSelectionService.readMenuOptions();
        },
        error => {
          console.error("Error", error);
          this.alertService.error(error.status);
          this.alertMessage.alertTitle = "Error del servidor";
          this.alertMessage.alertText = error.statusText;
          this.alertMessage.alertShow = true;
          this.alertMessage.alertClass =
            "alert alert-danger alert-dismissible fade show";
        }
      );
  }

  // Status
  onStatusChange() {
    this.userSelection.status = this.selectorForm.value.status;
    this.onGetUserSelectionMenus();
  }

  // ERROR: Handles error on queries
  onError(error?) {
    this.alertService.error(error.status);
    this.alertMessage.alertTitle = "Error del servidor";
    this.alertMessage.alertText = error.statusText;
    this.alertMessage.alertShow = true;
    this.alertMessage.alertClass =
      "alert alert-danger alert-dismissible fade show";
  }

  getUserJsonSelector() {
    this.jsonSelector = !this.jsonSelector;
  }
}
