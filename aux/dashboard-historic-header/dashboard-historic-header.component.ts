import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: 'app-dashboard-dashboard-historic-header',
  templateUrl: './dashboard-historic-header.component.html',
  styleUrls: ['./dashboard-historic-header.component.scss']
})
export class DashboardHistoricHeaderComponent implements OnInit {
  @Output() buttonOnHeader = new EventEmitter();


  @Input() header_data;

  constructor() {}

  ngOnInit() { }

  onClick() {
    this.buttonOnHeader.emit(true)
  }

  sendOpenModal() {
  }

  closeSelector($event) {
    this.buttonOnHeader.emit(true);
  }
}
