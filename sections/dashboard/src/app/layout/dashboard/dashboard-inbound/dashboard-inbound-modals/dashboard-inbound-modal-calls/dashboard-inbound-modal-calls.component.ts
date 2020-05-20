// Angular import
import { Component, OnInit, Input } from "@angular/core";

// Global shared services
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";

// Global shared models
import { AlertModel } from "shared/models/helpers/Alert";
import { UserSelectionModel } from "shared/models";

import { DashboardSelectionModel } from "sections/dashboard/src/shared/models";
import { DashboardInboundListsService } from "sections/dashboard/src/shared/services";

@Component({
  selector: "app-dashboard-dashboard-inbound-modal-calls",
  templateUrl: "./dashboard-inbound-modal-calls.component.html",
  styleUrls: ["./dashboard-inbound-modal-calls.component.scss"]
})
export class DashboardInboundModalCallsComponent implements OnInit {
  @Input() userSelection;
  @Input() modalView: string;

  // Component variables
  alertMessage = new AlertModel();
  show;
  rows;
  dashboardSelection = new DashboardSelectionModel();
  local_store;
  title;

  sortFn;

  constructor(
    private dashboardInboundListsService: DashboardInboundListsService,
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {
    this.title = this.onAddTitle(this.modalView);
    this.dashboardInboundListCallEntry(this.userSelection);
  }

  dashboardInboundListCallEntry(userSelection: UserSelectionModel) {
    this.dashboardSelection = {
      userSelection: userSelection,
      modalView: this.modalView
    };

    if (this.dashboardSelection) {
      this.dashboardInboundListsService
        .dashboardInboundListCallEntry(this.dashboardSelection)
        .subscribe(
          res => {
            if (res) {
              this.rows = res;
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
  }

  onActivate($event) {}

  onSelect($event) {}

  onAddTitle(modalView) {
    let result = "Lista de llamadas";
    if (modalView === "recibida") {
      result = "Lista de llamadas recibidas";
    }

    if (modalView === "atendida") {
      result = "Lista de llamadas atendidas";
    }

    if (modalView === "abandonada") {
      result = "Lista de llamadas abandonadas";
    }

    if (modalView === "corta") {
      result = "Lista de llamadas cortas";
    }

    if (modalView === "antes tiempo ideal") {
      result = "Lista de llamadas atendidas en tiempo ideal";
    }

    if (modalView === "despues tiempo ideal") {
      result = "Lista de llamadas atendidas despues tiempo ideal";
    }

    if (modalView === "colgada por agente") {
      result = "Lista de llamadas colgadas por el agente";
    }

    return result;
  }
}
