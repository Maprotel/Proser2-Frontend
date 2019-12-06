import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DashboardOutboundIndicatorsService } from "sections/dashboard/src/shared/services";
import { DashboardOutboundResponseModel } from "sections/dashboard/src/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";
import { AlertService, UserSelectionService } from "shared/services";
import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { dateToDatePicker } from "shared/functions";
@Component({
  selector: "app-dashboard-dashboard-outbound-historic",
  templateUrl: "./dashboard-outbound-historic.component.html",
  styleUrls: ["./dashboard-outbound-historic.component.scss"]
})
export class DashboardOutboundHistoricComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  header_data;

  alertMessage;
  show;
  title;

  // User selection
  userSelection;
  selectorVisibleFields;

  local_store;

  // data
  rows: DashboardOutboundResponseModel;

  // Timer
  timerConnected;
  // Icon
  faClock = faClock;

  // fake
  historic;

  constructor(
    private dashboardOutboundIndicatorsService: DashboardOutboundIndicatorsService,
    private userSelectionService: UserSelectionService,
    private alertService: AlertService
  ) {
    this.userSelection = new UserSelectionModel("userSelection");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.rows = new DashboardOutboundResponseModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
  }

  ngOnInit() {
    this.userSelection = new UserSelectionModel("userSelection");
    this.title = 'Salientes histórico';
    this.userSelectionHistoric()
    this.getReportListDashboard(this.userSelection);
  }

  // Finish
  ngOnDestroy() {
    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);
    this.subscription.unsubscribe();
  }

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
    this.userSelectionHistoric();
    this.dashboardOutboundIndicatorsService
      .getReportList(this.userSelection)
      .subscribe(
        (res: DashboardOutboundResponseModel) => {
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
    this.userSelectionHistoric();
    this.getReportListDashboard(this.userSelection);
  }

}
