import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { InvAgentPlanModel, ActionConfig } from "shared/models";

@Component({
  selector: "app-crud-inv-agent-plan-list",
  templateUrl: "./crud-inv-agent-plan-list.component.html",
  styleUrls: ["./crud-inv-agent-plan-list.component.scss"]
})
export class CrudInvAgentPlanListComponent implements OnInit {
  @Output() listAnswer: EventEmitter<any> = new EventEmitter();

  @Input() rows;
  @Input() numberOfRowsInTable;
  @Input() show_datatable;

  @Input() action;

  selected;
  selection;

  model: InvAgentPlanModel;
  sortFn
  // INITIALIZATION
  constructor() {
    this.model = new InvAgentPlanModel();
    this.selection = new InvAgentPlanModel();
    this.selected = [{ selected: new InvAgentPlanModel() }];
  }

  ngOnInit() {

  }

  // DETECT EVENTS ON DATATABLE
  onActivate(event) {}

  onSelect(event) {
    this.selection = event.selected[0];
    this.action.action = "selectedRecord";
    this.action.temp = this.selection;

    localStorage.setItem("recordSelection", JSON.stringify([this.selection]));

    this.listAnswer.emit(this.action);
  }
}
