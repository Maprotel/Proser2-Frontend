import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProShowDisplayModel, ActionConfig, AlertModel } from "shared/models";

import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  EnvService,
  UserSelectionService,
  AlertService
} from "shared/services";

import { UserSelectionModel } from "shared/models";

import { ProShowDisplayService } from "shared/services/";
// import { UserSelectionService } from "packages/system/src/app/shared/services/crud/system";

@Component({
  selector: "app-crud-crud-show-display-detail",
  templateUrl: "./crud-show-display-detail.component.html",
  styleUrls: ["./crud-show-display-detail.component.scss"]
})
export class CrudShowDisplayDetailComponent implements OnInit {
  // @Output() returnResult = new EventEmitter();
  // @Output() editAnswer: EventEmitter<any> = new EventEmitter();

  @Input() selection;
  @Input() showDatatable;
  @Input() showDetail;

  @Input() newRecord;
  @Input() editRecord;

  test: boolean = false

  alertMessage: AlertModel;
  env;
  // error_detected = false;
  // error_message;

  registerForm: FormGroup;

  show_submit_button;
  show_data;


  model: ProShowDisplayModel;

  weekDayList;
  displayTypeList;
  viewTypeList;

  userSelection;
  userSelectionTemp;
  selectorVisibleFields;
  selectorVisibleAreas;

  activeModal;

  rows_original;
  rows;

  showRecord = 'showRecord'
  constructor(
    private formBuilder: FormBuilder,
    private showDisplayService: ProShowDisplayService,
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService,
    private modalService: NgbModal
  ) {
    this.onResetValues()
  }

  ngOnInit() {
    this.onFillForm();
  }

  // onNewRecord() {
  //   console.log('onNewRecord');

  // }

  // onEditRecord() {
  //   console.log('onEditRecord');
  // }

  onFillForm() {
    /******** NEW RECORD ********* */
    // (this.action.action === "newRecord") ?
    //   this.selection = new ProShowDisplayModel() : this.selection;

    // (this.action.action === "selectedRecord") ?
    //   this.selection = new ProShowDisplayModel() : this.selection;

    this.registerForm = this.formBuilder.group({
      pro_show_display_id: [this.selection.pro_show_display_id],
      pro_show_display_name: [this.selection.pro_show_display_name],
      pro_show_display_weekday: [this.selection.pro_show_display_weekday],

      pro_show_display_start_time: [this.selection.pro_show_display_start_time],
      pro_show_display_end_time: [this.selection.pro_show_display_end_time],

      pro_show_display_type: [this.selection.pro_show_display_type],
      pro_show_display_selection: [this.selection.pro_show_display_selection],
      pro_show_display_view: [this.selection.pro_show_display_view],
      pro_show_display_status: [this.selection.pro_show_display_status]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }


  onResetValues() {
    this.env = this.envService;
    this.alertMessage = new AlertModel();
    this.show_submit_button = false;
    this.show_data = true;

    this.userSelection = new UserSelectionModel("userSelection");
    this.selectorVisibleFields = new UserSelectionModel('selectorVisibleFields');
    this.selectorVisibleFields.mode = false;
    this.selectorVisibleFields.interval = true;
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.last_minutes = true;
    this.selectorVisibleFields.status = false;
    this.selectorVisibleFields.auxiliar = false;
    this.selectorVisibleFields.assignation = false;

    this.selectorVisibleAreas = {
      date: false,
      interval: true,
      options: true,
      buttons: true,
    }

    this.model = new ProShowDisplayModel();
    this.weekDayList = this.model.weekDayList();
    this.displayTypeList = this.model.displayTypeList();
    this.viewTypeList = this.model.viewTypeList();
  }


  // CREATE RECORD
  onCreateRecord(query) {
    let record = this.registerForm.value;

    record.pro_show_display_weekday = JSON.stringify(
      this.registerForm.value.pro_show_display_weekday
    );
    record.pro_show_display_type = JSON.stringify(
      this.registerForm.value.pro_show_display_type
    );
    record.pro_show_display_view = JSON.stringify(
      this.registerForm.value.pro_show_display_view
    );

    record.pro_show_display_selection = JSON.stringify(
      this.registerForm.value.pro_show_display_selection
    );

    this.showDisplayService.postRecord(record).subscribe(
      data => {
        alert(
          `Registro agregado satisfactoriamente, ${data.pro_show_display_id}, ${data.pro_show_display_name}`
        );
        // this.action.temp = [data];
        // this.selection = new AuxHourModel;
        // this.onFillForm();
        // this.show_data = true;
        // this.action.action = "afterCreatedRecord";
        // this.editAnswer.emit(this.action);
      },
      error => {
        this.show_data = false;
        this.onError(error);
      }
    );
  }

  // EDIT RECORD
  onEditRecord(query) {
    let record = this.registerForm.value;

    record.pro_show_display_weekday = JSON.stringify(
      this.registerForm.value.pro_show_display_weekday
    );
    record.pro_show_display_type = JSON.stringify(
      this.registerForm.value.pro_show_display_type
    );
    record.pro_show_display_view = JSON.stringify(
      this.registerForm.value.pro_show_display_view
    );

    record.pro_show_display_selection = JSON.stringify(
      this.registerForm.value.pro_show_display_selection
    );

    this.showDisplayService.putRecord(record).subscribe(
      data => {
        this.selection = data;
        // this.action.temp = this.selection;
        alert(
          `Registro modificado satisfactoriamente`
        );
        // this.action.action = "selectedRecord";
        this.show_data = true;
        // this.editAnswer.emit(this.action);
      },
      error => {
        this.show_data = false;
        this.onError(error);
      }
    );
  }

  // DELETE RECORD
  onDeleteRecord(query: ProShowDisplayModel) {
    // let id = this.action.temp.pro_show_display_id;
    let id = 1;

    this.showDisplayService.deleteRecord(id).subscribe(
      data => {
        this.selection = data;
        // this.action.temp = this.selection;
        this.selection = new ProShowDisplayModel();
        this.onFillForm();
        alert(`Registro eliminado satisfactoriamente`);
        this.show_data = true;
        // this.editAnswer.emit(this.action);
      },
      error => {
        console.error("Error", error);
        this.show_data = false;
        this.onError(error);
      }
    );
  }


  onSubmit(register) {
    // if (this.action.action === "newRecord") {
    //   this.createRecord(register);
    //   this.afterCreatedRecord(register);
    // }

    // if (this.action.action === "editRecord") {
    //   this.selection = register;
    //   this.editRecord(register);
    //   this.afterEditedRecord(register);
    // }

    // if (this.action.action === "deleteRecord") {
    //   this.selection = register;
    //   this.deleteRecord(register);
    //   this.action.temp = register;
    //   this.editAnswer.emit(this.action);
    // }

    // if (this.action.action === "showRecord") {
    //   this.selection = register;
    //   this.action.temp = register;
    //   this.editAnswer.emit(this.action);
    // }
  }

  // ERROR
  onError(error?) {
    this.alertService.error(error.status);
    this.alertMessage.alertTitle = "Error del servidor";
    this.alertMessage.alertText = error.statusText;
    this.alertMessage.alertShow = true;
    this.alertMessage.alertClass =
      "alert alert-danger alert-dismissible fade show";
  }


  // Selector
  onOpenSelector(event) {
    this.userSelectionTemp = this.userSelection;
    this.onOpenModal(event);
  }

  onAcceptSelector(event) {
    // this.onResetValues()
    this.registerForm.patchValue({
      pro_show_display_selection: this.userSelection
    });

    console.log('onAcceptSelector', this.registerForm.value.pro_show_display_selection);
    this.onCloseModal()
  }

  onCancelSelector() {
    this.userSelection = this.userSelectionTemp;
    this.onCloseModal()
  }


  // Modal
  onOpenModal(content) {
    this.userSelectionTemp = this.userSelection;
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  onCloseModal() {

    // this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.activeModal.close();
  }


  editUserSelection(content) {
    this.userSelection = this.registerForm.value.pro_show_display_selection
    this.userSelection.title = 'Selección tres';
    console.log('editUserSelection', this.userSelection);
    this.registerForm.patchValue({
      pro_show_display_selection: this.userSelection
    });
    this.onOpenModal(content);
  }

  /*** */

  // onDelete() {
  //   this.action.action = "delete";
  //   this.deleteRecord(this.action.temp);
  // }

  // onDeactivate() {
  //   this.selection = this.action.temp;
  //   this.selection.pro_show_display_status = "I";
  //   this.onFillForm();
  //   this.show_submit_button = true;
  //   // this.registerForm.pristine = false;
  // }

  // onReactivate() {
  //   this.selection = this.action.temp;
  //   this.selection.pro_show_display_status = "A";
  //   this.onFillForm();
  //   this.show_submit_button = true;
  //   // this.registerForm.pristine = false;
  // }

  // onReset() {
  //   this.selection = new ProShowDisplayModel();
  //   this.action.temp = this.selection;
  //   this.onFillForm();
  // }

  // afterCreatedRecord(register) {
  //   this.action.action = "afterCreatedRecord";
  //   this.action.temp = [register];
  //   this.editAnswer.emit(this.action);
  // }

  // onShowDetail() {
  //   this.action.action = "showRecord";
  // }

  // onEditRecord() {
  //   this.action.action = "editRecord";
  //   this.selection = this.action.temp;
  //   this.onFillForm();
  // }

  // afterEditedRecord(register) {
  //   this.action.action = "afterEditedRecord";
  //   this.action.temp = [register];
  //   this.editAnswer.emit(this.action);
  // }

  // onCancel() {
  //   this.action = { action: "cancel", temp: "" };
  //   this.editAnswer.emit(this.action);
  // }

  // onAction() {
  //   this.action = { action: "edit_box", temp: "" };
  //   this.editAnswer.emit(this.action);
  // }



  // sendTest() {
  //   this.action.action = "test";
  //   this.action.temp = [
  //     {
  //       aux_color_id: 2,
  //       aux_color_name: "Supervisor 008",
  //       aux_color_status: "A"
  //     }
  //   ];

  //   this.editAnswer.emit(this.action);
  // }

  // onRecordJsonChange() { }

  // copyUserSelection() {
  //   let temp = localStorage.getItem("proser_historic");

  //   this.registerForm.patchValue({
  //     pro_show_display_selection: temp
  //   });

  // }


}
