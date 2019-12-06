import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

import {
  dateToDatePicker,
  objectTimeToTextTime,
  objectDateToTextDate,
  selectorOptionSubtitles,
  selectorLegendSubtitles
} from "shared/functions";

@Component({
  selector: "app-reports-inbound-report",
  templateUrl: "./inbound-report.component.html",
  styleUrls: ["./inbound-report.component.scss"]
})
export class InboundReportComponent implements OnInit {

  // Alert
  alertMessage: AlertModel = new AlertModel();

  // Modal
  activeModal: NgbActiveModal;

  // Selector
  userSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;
  menuOptions: UserSelectionModel;
  userSelectionTemp: UserSelectionModel;
  selectorVisibleAreas;


  // Show
  showHeader: boolean = true;
  showDatatable: boolean = false;

  // Data
  title;



  constructor(
    private modalService: NgbModal,
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {
  }

  ngOnInit() {
    this.onResetValues();
  }

  onResetValues() {
    // Stored Data
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.menuOptions = this.userSelectionService.readMenuOptions();

    // Component variables
    this.title = "Reporte de llamadas entrantes";
    this.showHeader = true;

    // Selector
    this.selectorVisibleFields = new UserSelectionModel("selectorVisibleFields");
    this.selectorVisibleFields.start_time = false;
    this.selectorVisibleFields.end_time = false;

    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.last_minutes = false;

    this.selectorVisibleFields.auxiliar = false;
    this.selectorVisibleFields.assignation = false;

    this.selectorVisibleAreas = {
      date: true,
      interval: false,
      options: true,
      buttons: true,
    }

    // userSelection
    // this.userSelection = new UserSelectionModel('standard')
    this.userSelection.title = this.title;
    this.userSelection.mode = { id: 1, name: "Histórico", value: "historic" };
    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);

    // menuOptions
    // this.menuOptions = new UserSelectionModel("menuOptions");
    console.log('this.menuOptions', this.menuOptions);

    // this.onUserSelectionMenus();
    // this.userSelectionService.writeMenuOptions(this.menuOptions);


  }

  // userSelectionMenus

  onUserSelectionMenus() {
    this.userSelectionService.getUserSelectionMenus(this.userSelection)
      .subscribe(data => {

        this.menuOptions = data;
        this.userSelectionService.writeMenuOptions(this.menuOptions);
        this.menuOptions = this.userSelectionService.readMenuOptions();
        console.log('this.menuOptions', this.menuOptions);

      },
        error => {
          console.error("Error", error);
          this.alertService.error(error.status);
          this.alertMessage.alertTitle = "Error del servidor";
          this.alertMessage.alertText = error.statusText;
          this.alertMessage.alertShow = true;
          this.alertMessage.alertClass =
            "alert alert-danger alert-dismissible fade show";
        });
  }

  // Selector
  onOpenSelector(event) {
    this.showHeader = false;
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.menuOptions = this.userSelectionService.readMenuOptions();
    this.userSelectionTemp = this.userSelection;
    this.onOpenModal(event);
  }

  onAcceptSelector(event) {
    this.showHeader = true;
    console.log('this.userSelection', this.userSelection);
    console.log('this.menuOptions', this.menuOptions);

    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);
    this.userSelectionService.writeMenuOptions(this.menuOptions);
    this.onCloseModal()
  }

  onCancelSelector() {
    this.showHeader = true;
    this.userSelection = this.userSelectionTemp;
    this.onCloseModal()
  }


  // Modal
  onOpenModal(content) {
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  onCloseModal() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.activeModal.close();
  }

}
