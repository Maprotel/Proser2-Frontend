import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

@Component({
  selector: "app-display-display-outbound",
  templateUrl: "./display-outbound.component.html",
  styleUrls: ["./display-outbound.component.scss"]
})
export class DisplayOutboundComponent implements OnInit {
  displayUserSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;
  title;

  constructor(
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {
    this.displayUserSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.title = "Display llamadas salientes";
  }

  ngOnInit() {
    if (this.displayUserSelection.title !== this.title) {
      this.setReportTitles();
    }
  }

  setReportTitles() {
    // this.displayUserSelection = new UserSelectionModel("standard");
    this.displayUserSelection.title = this.title;
    // //
    // //
    this.userSelectionService.writeUserSelectionHistoric(this.displayUserSelection);

    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }
}
