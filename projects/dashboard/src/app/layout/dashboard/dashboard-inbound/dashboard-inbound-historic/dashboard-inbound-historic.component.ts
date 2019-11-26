import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DashboardInboundIndicatorsService } from "projects/dashboard/src/shared/services";
import { DashboardInboundResponseModel } from "projects/dashboard/src/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";

import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { dateToDatePicker } from "shared/functions";

import { EnvService, AlertService, UserSelectionService } from "shared/services";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dashboard-dashboard-inbound-historic",
  templateUrl: "./dashboard-inbound-historic.component.html",
  styleUrls: ["./dashboard-inbound-historic.component.scss"]
})
export class DashboardInboundHistoricComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  header_data;
  activeModal: NgbActiveModal;
  env;

  alertMessage;
  show;
  title;

  // User selection
  userSelection;
  selectorVisibleFields;

  local_store;

  // data
  rows: DashboardInboundResponseModel;

  // Timer
  timerConnected;
  // Icon
  faClock = faClock;

  // fake
  historic;

  constructor(
    private dashboardInboundIndicatorsService: DashboardInboundIndicatorsService,
    private userSelectionService: UserSelectionService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
  ) {
    this.userSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.env = this.envService;
    this.rows = new DashboardInboundResponseModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
  }

  ngOnInit() {
    this.userSelection = new UserSelectionModel("standard");
    this.title = ("Llamadas entrantes historico");
    this.userSelectionHistoric()
    this.getReportListDashboard(this.userSelection);
  }

    // Finish
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  // onSetHeader() {
  //   this.header_data = {
  //     callcenterName: this.env.callcenterName,
  //     title: this.title,
  //     date: 'date',
  //     interval: 'interval',
  //     legend: 'legend',
  //     options: 'options',
  //   };
  // }



  userSelectionHistoric() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;

    this.userSelection.title = this.title;

    this.userSelection.mode = { id: 0, name: "Histórico", value: "historic" };

    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
  }

  // Get records from backend
  getReportListDashboard(userSelection: UserSelectionModel) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric();
    this.dashboardInboundIndicatorsService
      .getReportList(this.userSelection)
      .subscribe(
        (res: DashboardInboundResponseModel) => {
          this.timerConnected = 0;
          if (res) {
            this.rows = res;
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
    this.getReportListDashboard(this.userSelection);
  }


  // Open modal
  openDetailModal(content) {
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  onCloseModal(event, closeModal) {
    this.activeModal.close();
  }
}
