
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import {

  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";

import { AlertModel, UserSelectionModel } from "shared/models";

@Component({
  selector: "app-reports-calls-indicators-interval-report",
  templateUrl: "./calls-indicators-interval-report.component.html",
  styleUrls: ["./calls-indicators-interval-report.component.scss"]
})

export class CallsIndicatorsByIntervalReportComponent implements OnInit {

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

    // Component variables
    this.title = "Indicadores por intervalo";
    this.showHeader = true;

    // Selector
    this.selectorVisibleFields = new UserSelectionModel("selectorVisibleFields");
    this.selectorVisibleFields.start_time = false;
    this.selectorVisibleFields.end_time = false;

    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = true;
    this.selectorVisibleFields.last_minutes = false;

    this.selectorVisibleFields.auxiliar = false;
    this.selectorVisibleFields.assignation = false;

    this.selectorVisibleAreas = {
      date: true,
      interval: true,
      options: true,
      buttons: true,
    }

    // userSelection
    this.userSelection.title = this.title;
    this.userSelection.mode = { id: 1, name: "Histórico", value: "historic" };
    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);

    // Show
    this.showDatatable = true

  }



  // Selector
  onOpenSelector(event) {
    this.showDatatable = false
    this.userSelectionTemp = this.userSelection;
    this.onOpenModal(event);
  }

  onAcceptSelector(event) {
    this.userSelectionService.writeUserSelectionHistoric(event);
    this.onResetValues()
    this.onCloseModal()
  }

  onCancelSelector() {
    this.userSelection = this.userSelectionTemp;
    this.onCloseModal()
  }

  // Modal
  onOpenModal(content) {
    this.showDatatable = false;
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  onCloseModal() {
    this.showHeader = true;
    this.showDatatable = true;
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.activeModal.close();
  }

}
