import { Component, OnInit, Input } from "@angular/core";
import { AlertModel } from "shared/models";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  // @Input() alertMessage: AlertModel;  alertError;

  @Input() alertError;
  @Input() alertMessage: AlertModel;

  showDetail

  constructor(
  ) { }



  ngOnInit() {
  }


  onShowHideDetail(){
    this.showDetail = !this.showDetail
  }

}
