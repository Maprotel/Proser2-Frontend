import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProShowDisplayModel, ActionConfig } from "shared/models";

@Component({
  selector: "app-crud-crud-show-display-list",
  templateUrl: "./crud-show-display-list.component.html",
  styleUrls: ["./crud-show-display-list.component.scss"]
})
export class CrudShowDisplayListComponent implements OnInit {
  @Output() listAnswer: EventEmitter<any> = new EventEmitter();
  @Output() selectionBack: EventEmitter<any> = new EventEmitter();

  @Input() rows;
  @Input() numberOfRowsInTable;

  // Show
  @Input() showDatatable;
  @Input() showDetail;
  @Input() selection: ProShowDisplayModel;

  selected;

  model: ProShowDisplayModel;

  query;


  // INITIALIZATION
  constructor() {
    this.model = new ProShowDisplayModel();
    this.selected = [{ selected: new ProShowDisplayModel() }];
  }

  ngOnInit() {

  }

  onActivate(event) {

  }

  onSelect(event) {
    this.selectionBack.emit(event.selected[0]);
  }


  onExportToExcel(data, name) {
    // this.show_datatable = true;
    // const filterData = data.map(x => {
    //   return {
    //     id: x.aux_color_id,
    //     nombre: x.aux_color_name,
    //     color_hexadecimal: x.aux_color_string,
    //     uso: x.aux_color_use,
    //     estatus: x.aux_color_status
    //   };
    // });
  }

  /************************************************ */

}
