import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-dashboard-dashboard-inbound",
  templateUrl: "./dashboard-inbound.component.html",
  styleUrls: ["./dashboard-inbound.component.scss"]
})
export class DashboardInboundComponent implements OnInit {
  userSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;
  title;
  local_store;

  // Component variables
  alertMessage = new AlertModel();
  env;

  constructor(
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {}
}
