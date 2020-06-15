import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-display-display-header",
  templateUrl: "./display-header.component.html",
  styleUrls: ["./display-header.component.scss"]
})
export class DisplayHeaderComponent implements OnInit {
  
  @Input() userSelection;
  @Input() selectorVisibleFields;
  @Input() timerConnected;

  
  constructor() {}

  ngOnInit() {}


}
