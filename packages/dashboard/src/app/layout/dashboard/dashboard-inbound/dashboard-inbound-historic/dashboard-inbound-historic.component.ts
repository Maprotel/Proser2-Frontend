import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DashboardInboundIndicatorsService } from "packages/dashboard/src/shared/services";
import { DashboardInboundResponseModel } from "packages/dashboard/src/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";

import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";


import { EnvService, AlertService, UserSelectionService } from "shared/services";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import {
  dateToDatePicker,
  selectorOptionSubtitles,
  selectorLegendSubtitles
} from "shared/functions";

@Component({
  selector: "app-dashboard-dashboard-inbound-historic",
  templateUrl: "./dashboard-inbound-historic.component.html",
  styleUrls: ["./dashboard-inbound-historic.component.scss"]
})
export class DashboardInboundHistoricComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  alertMessage;
  show;
  title;

  // User selection
  userSelection;
  selectorVisibleFields;
  selectorVisibleAreas;

  dashboardOptions;
  local_store;

  // data
  rows: DashboardInboundResponseModel;

  // Timer
  timerConnected;

  // Icon
  faClock = faClock;

  // fake
  historic;

  showHeader: boolean = true
  showDatatable;
  userSelectionTemp
  activeModal


  constructor(
    private dashboardInboundIndicatorsService: DashboardInboundIndicatorsService,
    private userSelectionService: UserSelectionService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
  ) {
    this.userSelection = new UserSelectionModel("userSelection");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.rows = new DashboardInboundResponseModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
  }
  ngOnInit() {
    this.onResetValues();
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResetValues() {
    // Stored Data
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();

    // Component variables
    this.title = "Entrantes histórico";
    this.showHeader = true;

    // Selector
    this.selectorVisibleFields = new UserSelectionModel("selectorVisibleFields");

    this.selectorVisibleFields.start_date = true;
    this.selectorVisibleFields.end_date = true;

    this.selectorVisibleFields.start_time = true;
    this.selectorVisibleFields.end_time = true;

    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.last_minutes = false;

    this.selectorVisibleFields.auxiliar = false;
    this.selectorVisibleFields.assignation = false;

    this.selectorVisibleAreas = {
      date: true,
      interval: true,
      options: true,
      buttons: false,
    }

    // userSelection
    this.userSelection.title = this.title;

    this.userSelection.mode = { id: 0, name: "Histórico", value: "historic" };

    this.userSelection.options = selectorOptionSubtitles(this.userSelection)
    this.userSelection.legend = selectorLegendSubtitles(this.userSelection)

    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();

    // Show
    this.showDatatable = true

  }

  // Get records from backend
  getReportListDashboard(userSelection: UserSelectionModel) {
    this.dashboardInboundIndicatorsService
      .getReportList(this.userSelection)
      .subscribe(
        (res: DashboardInboundResponseModel) => {
          this.timerConnected = 0;
          if (res) {
            this.rows = res;
            this.showDatatable = true;
          } else {
            console.error("Error", res);
          }
          this.alertMessage = new AlertModel();
        },
        error => {
          console.error("Error", error);
          this.showDatatable = false;
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
    this.getReportListDashboard(this.userSelection);
  }

  // Real time repeat
  onRepeat() {
    let timerComponent = timer(1000, 5000);
    let timerClock = timer(1000, 1000);

    this.getReportListDashboard(this.userSelection);

    this.subscription.add(
      timerComponent.subscribe(() => {
        this.getReportListDashboard(this.userSelection);
      })
    );

    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }

  // Selector
  onOpenSelector(event) {
    this.showDatatable = false
    this.userSelectionTemp = this.userSelection;
    this.onOpenModal(event);
  }

  onAcceptSelector(event) {
    this.showDatatable = false;
    console.log('event', event);
    this.userSelection = event;
    this.userSelectionService.writeUserSelectionHistoric(event);
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
    this.showDatatable = false;
    // this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.activeModal.close();
  }
}
