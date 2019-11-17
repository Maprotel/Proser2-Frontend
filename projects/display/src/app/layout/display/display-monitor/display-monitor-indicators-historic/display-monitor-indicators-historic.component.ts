

import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DisplayMonitorByIndicatorsService } from "projects/display/src/app/shared/services";
import { DisplayMonitorByIndicatorsModel } from "projects/display/src/app/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";
import { AlertService, UserSelectionService } from "shared/services";
import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  selectionToText,
  optionsToText,
  dateToDatePicker
} from "shared/functions";

@Component({
  selector: 'app-display-display-monitor-indicators-historic',
  templateUrl: './display-monitor-indicators-historic.component.html',
  styleUrls: ['./display-monitor-indicators-historic.component.scss']
})
export class DisplayMonitorIndicatorsHistoricComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  alertMessage;
  show;

  // User selection
  userSelection;
  selectorVisibleFields;
  old_start_date;
  old_end_date;

  dashboardOptions;
  local_store;

  // data
  rows;
  rows_total;
  update_date;
  update_time;

  // Timer
  timerConnected;
  currentDate;

  // Icon
  faClock = faClock;

  // fake
  historic;

  constructor(
    private displayMonitorByIndicatorsService: DisplayMonitorByIndicatorsService,

    private userSelectionService: UserSelectionService,
    private alertService: AlertService
  ) {
    this.userSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("menuOptions");
    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;
    this.rows = new DisplayMonitorByIndicatorsModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
    // this.dashboardOptions = [
    //   {
    //     id: 1,
    //     name: "Supervisores"
    //   },
    //   {
    //     id: 1,
    //     name: "Agentes"
    //   }
    // ];
  }

  ngOnInit() {
    this.userSelection = new UserSelectionModel("standard");

    this.userSelection.mode = { id: 0, name: "Actual", value: 'actual' };
    this.old_end_date = this.userSelection.end_date;
    this.old_start_date = this.userSelection.start_date;

    this.getMonitorList(this.userSelection);
    this.setReportTitles("Monitor de indicadores");
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.userSelection.end_date = this.old_end_date;
    this.userSelection.start_date = this.old_start_date;

    this.userSelectionService.writeUserSelectionHistoric(
      this.userSelection,
    );

    this.subscription.unsubscribe();
  }

  // Get records from backend
  getMonitorList(userSelection: UserSelectionModel) {
    this.userSelection.mode = { id: 0, name: "Actual", value: 'actual' };
    this.userSelection.start_date = this.userSelection.current_date;
    this.userSelection.end_date = this.userSelection.current_date;
    this.displayMonitorByIndicatorsService
      .getReportList(userSelection)
      .subscribe(
        res => {
          this.timerConnected = 0;
          if (res) {
            this.rows = res.detail;
            this.rows_total = res.total;
            this.update_date = res.now;
            this.show = true;
          } else {
            console.error("Error", res);
          }
          this.alertMessage = new AlertModel();
        },
        error => {
          console.error("Error", error);
          this.show = false;
          this.alertService.error(error.status);
          this.alertMessage.alertTitle = "Error del servidor";
          this.alertMessage.alertText = error.statusText;
          this.alertMessage.alertShow = true;
          this.alertMessage.alertClass =
            "alert alert-danger alert-dismissible fade show";
        }
      );
  }

  // Update on return of selector in header
  onReturnHeaderResult(event) {
    this.show = false;
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );

    this.getMonitorList(this.userSelection);
  }

  // Real time repeat
  onRepeat() {
    let timerComponent = timer(1000, 5000);
    let timerClock = timer(1000, 1000);

    this.getMonitorList(this.userSelection);

    this.subscription.add(
      timerComponent.subscribe(() => {
        this.getMonitorList(this.userSelection);
      })
    );

    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }

  setReportTitles(title) {
    this.userSelection.title = title;

    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);

    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }

  onSelect() { }
}
