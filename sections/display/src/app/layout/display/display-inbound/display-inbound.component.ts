import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-display-display-inbound",
  templateUrl: "./display-inbound.component.html",
  styleUrls: ["./display-inbound.component.scss"]
})
export class DisplayInboundComponent implements OnInit {
  userSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;
  title;

  constructor(
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {
    // this.userSelection = new UserSelectionModel("standard");
    // // this.selectorVisibleFields = new UserSelectionModel("visible");
    // this.title = "Display llamadas entrantes";
  }

  ngOnInit() {

  }

  setReportTitles() {

  }
}
