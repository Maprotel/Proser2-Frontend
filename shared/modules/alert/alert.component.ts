import { Component, OnInit, Input } from "@angular/core";
import { AlertModel } from "shared/models";

import {
  AlertService,
} from "shared/services";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  // @Input() alertMessage: AlertModel;

  @Input() alertError;
  alertMessage: AlertModel = new AlertModel();

  constructor(
    private alertService: AlertService
  ) { this.onResetAlert() }



  ngOnInit() {
    this.alertError ? this.onAlertError(this.alertError) : this.onResetAlert();
  }

  onResetAlert() {
    // this.alertService.error(error.status);
    this.alertMessage.alertTitle = "";
    this.alertMessage.alertText = '';
    this.alertMessage.alertShow = false;
    this.alertMessage.alertClass = "";
  }

  onAlertError(error) {
    console.error("Error", error);
    this.alertService.error(error.status);
    this.alertMessage.alertTitle = "Error del servidor";
    this.alertMessage.alertText = error.statusText;
    this.alertMessage.alertShow = true;
    this.alertMessage.alertClass =
      "alert alert-danger alert-dismissible fade show";
  }

}
