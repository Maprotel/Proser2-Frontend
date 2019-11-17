import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-dashboard-dashboard-outbound",
  templateUrl: "./dashboard-outbound.component.html",
  styleUrls: ["./dashboard-outbound.component.scss"]
})
export class DashboardOutboundComponent implements OnInit {
  constructor(
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {}
}
