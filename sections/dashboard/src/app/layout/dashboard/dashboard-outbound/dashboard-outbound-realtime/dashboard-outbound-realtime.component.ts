import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DashboardOutboundIndicatorsRealTimeService } from "sections/dashboard/src/shared/services";
import { DashboardOutboundResponseModel } from "sections/dashboard/src/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";
import { AlertService, UserSelectionService } from "shared/services";
import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { dateToDatePicker } from "shared/functions";
@Component({
  selector: "app-dashboard-dashboard-outbound-realtime",
  templateUrl: "./dashboard-outbound-realtime.component.html",
  styleUrls: ["./dashboard-outbound-realtime.component.scss"]
})
export class DashboardOutboundRealtimeComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  alertMessage;
  show;
  title;

  // User selection
  userSelection;
  selectorVisibleFields;
  old_start_date;
  old_end_date;

  dashboardOptions;
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
    private dashboardOutboundIndicatorsRealTimeService: DashboardOutboundIndicatorsRealTimeService,

    private userSelectionService: UserSelectionService,
    private alertService: AlertService
  ) {
    this.userSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.rows = new DashboardOutboundResponseModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
    this.title = "Salientes en tiempo real";
  }

  ngOnInit() {
    this.userSelectionCurrent();
    this.getReportListDashboard(this.userSelection);
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  userSelectionCurrent() {
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;

    this.userSelection.title = this.title;
    this.userSelection.mode = { id: 0, name: "Actual", value: "actual" };
    this.userSelection.start_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.end_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.current_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );

    this.userSelectionService.writeUserSelectionCurrent(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
  }

  // Get records from backend
  getReportListDashboard(userSelection: UserSelectionModel) {
    this.userSelectionCurrent();
    this.dashboardOutboundIndicatorsRealTimeService
      .getReportList(userSelection)
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
}
