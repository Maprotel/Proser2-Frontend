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
  selector: "app-dashboard-dashboard-outbound-modal-plan-agents",
  templateUrl: "./dashboard-outbound-modal-plan-agents.component.html",
  styleUrls: ["./dashboard-outbound-modal-plan-agents.component.scss"]
})
export class DashboardOutboundModalPlanAgentsComponent implements OnInit {
  @Input() userSelection;
  

  // Component variables
  alertMessage = new AlertModel();
  show;
  rows;
  dashboardSelection = new DashboardSelectionModel();
  local_store;
  title;

  constructor(
    private dashboardOutboundListsService: DashboardOutboundListsService,
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {
   

    this.dashboardOutboundListPlanAgents(this.userSelection);
  }

  dashboardOutboundListPlanAgents(userSelection: UserSelectionModel) {
    

    if (this.userSelection) {
      this.dashboardOutboundListsService
        .dashboardOutboundListPlanAgents(this.userSelection)
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

  onActivate() {}

  onSelect() {}

  
}
