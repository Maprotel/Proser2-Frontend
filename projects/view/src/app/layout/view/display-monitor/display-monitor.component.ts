import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import {
  AlertService,
  EnvService,
  UserSelectionService
} from "shared/services";
import { UserSelectionModel } from "shared/models";

@Component({
  selector: 'app-display-display-monitor',
  templateUrl: './display-monitor.component.html',
  styleUrls: ['./display-monitor.component.scss']
})
export class DisplayMonitorComponent implements OnInit {

  userSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;
  title;

  // Component variables
  alertMessage = new AlertModel();
  env;

  constructor(
    private alertService: AlertService,
    private envService: EnvService,
    private userSelectionService: UserSelectionService
  ) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      "proser_historic"
    );
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.title = "Dashboard llamadas entrantes";
  }

  ngOnInit() {
    if (this.userSelection.title !== this.title) {
      this.setReportTitles();
    }
  }

  setReportTitles() {
    // this.userSelection = new UserSelectionModel("standard");
    this.userSelection.title = this.title;
    // //
    // //
    this.userSelectionService.writeUserSelectionHistoric(this.userSelection);

    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }
}