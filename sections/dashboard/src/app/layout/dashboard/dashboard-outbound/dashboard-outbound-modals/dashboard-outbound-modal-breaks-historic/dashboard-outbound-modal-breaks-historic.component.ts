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
import { DashboardOutboundListsService } from "sections/dashboard/src/shared/services";

@Component({
  selector: 'app-dashboard-dashboard-outbound-modal-breaks-historic',
  templateUrl: './dashboard-outbound-modal-breaks-historic.component.html',
  styleUrls: ['./dashboard-outbound-modal-breaks-historic.component.scss']
})
export class DashboardOutboundModalBreaksHistoricComponent implements OnInit {

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
    private dashboardOutboundListsService: DashboardOutboundListsService,
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {

    this.title = this.onAddTitle(this.modalView);
    this.dashboardOutboundListAuditBreaks(this.userSelection);
  }

  dashboardOutboundListAuditBreaks(userSelection: UserSelectionModel) {
    this.dashboardSelection = {
      userSelection: userSelection,
      modalView: this.modalView
    };
    

    if (this.dashboardSelection) {
      this.dashboardOutboundListsService
        .dashboardOutboundListAuditBreaks(this.dashboardSelection)
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
    let result = "Lista de agentes";
    if (modalView === "auxiliar-historico") {
      result = "Lista de agentes en auxiliar";
    } else if (modalView === "asignado-historico") {
      result = "Lista de agentes en asignación";
    }

    return result;
  }
}
