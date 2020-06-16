
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProShowDisplayModel, ActionConfig, UserSelectionModel, AlertModel } from "shared/models";
import { ProShowDisplayService, AlertService, EnvService } from "shared/services/";
import { getUpdateFilter } from "shared/functions";

@Component({
  selector: "app-crud-crud-show-display",
  templateUrl: "./crud-show-display.component.html",
  styleUrls: ["./crud-show-display.component.scss"]
})
export class CrudShowDisplayComponent implements OnInit {
  // @Output() newRecord: EventEmitter<any> = new EventEmitter();
  // @Output() editRecord: EventEmitter<any> = new EventEmitter();

  @Output() newRecordBack: EventEmitter<any> = new EventEmitter();
  @Output() editRecordBack: EventEmitter<any> = new EventEmitter();

  // MAIN VARIABLES
  alertMessage: AlertModel;
  selection: ProShowDisplayModel;
  selected: [{ selected: ProShowDisplayModel }];

  rows;
  rows_original;
  query;

  showDetail;
  showDatatable;
  showEditButton;

  rowsInTableList;

  numberOfRowsInTable;

  newRecord;
  editRecord;

  // show_data;
  // show_datatable;
  // show_new_button;
  // show_selected_button;


  // findInList;
  // filterFieldList;

  // selectedFilterField;
  // status_field;

  // excel_subtitle;

  // env;
  // error_detected = false;
  // error_message;



  // INITIALIZATION
  constructor(
    private showDisplayService: ProShowDisplayService,
    private alertService: AlertService,
    private envService: EnvService
  ) {
    this.alertMessage = new AlertModel();
    this.showDetail = true;
    this.showDatatable = true
    this.showEditButton = false;
    this.selection = new ProShowDisplayModel;
    // this.numberOfRowsInTable.value = {id: 0, value: 15}

    // this.show_data = true;
    // this.show_datatable = true;
    // this.show_new_button = true;
    // this.show_selected_button = false;

    // this.selection = new ProShowDisplayModel();
    // this.status_field = "aux_color_status";
    // this.excel_subtitle = "agente";

    // this.selected = [{ selected: new ProShowDisplayModel() }];
    // this.rowsInTableList = [
    //   { id: 1, value: 1 },
    //   { id: 10, value: 10 },
    //   { id: 15, value: 15 }
    // ];
    // this.numberOfRowsInTable = { id: 10, value: 10 };
    // this.filterFieldList = this.selection.fieldList();
    // this.selectedFilterField = {
    //   field_name: "aux_color_name",
    //   name: "nombre",
    //   text: "nombre"
    // };
  }

  ngOnInit() {
    this.onGetAll();
  }



  onGetActive(event?) {
    let query = `{"where":{"pro_show_display_status":"A"}}`;
    this.getAll_Records(query);
  }

  onGetInactive($event?) {
    let query = `{"where":{"pro_show_display_status":"I"}}`;
    this.getAll_Records(query);
  }

  onGetAll($event?) {
    let query = ``;
    this.getAll_Records(query);
  }


  onSelectionBack(selection) {
    this.selection = selection
  }

  onNewRecord(event) {
    console.log('new');
    this.showEditButton = false
    this.selection = new ProShowDisplayModel();
  }

  onEditRecord(event) {
    console.log('new');
    this.showEditButton = true
  }


  getAll_Records(query?) {
    this.showDisplayService.getRecords().subscribe(
      (data: ProShowDisplayModel[]) => {
        let data_mapped = data.map(x => {
          return {
            pro_show_display_id: x.pro_show_display_id,

            pro_show_display_name: x.pro_show_display_name,
            pro_show_display_start_time: x.pro_show_display_start_time,
            pro_show_display_end_time: x.pro_show_display_end_time,
            pro_show_display_status: x.pro_show_display_status,

            pro_show_display_weekday: x.pro_show_display_weekday
              ? JSON.parse(x.pro_show_display_weekday)
              : null,

            pro_show_display_type: x.pro_show_display_type
              ? JSON.parse(x.pro_show_display_type)
              : null,

            pro_show_display_view: x.pro_show_display_view
              ? JSON.parse(x.pro_show_display_view)
              : null,

            pro_show_display_selection: x.pro_show_display_selection
              ? JSON.parse(x.pro_show_display_selection)
              : null
          };
        });

        this.rows_original = data_mapped;
        this.rows = data_mapped;
        this.alertMessage = new AlertModel();
      },
      error => {
        this.alertService.error(error.status);
        this.alertMessage.alertTitle = "Error del servidor";
        this.alertMessage.alertText = error.statusText;
        this.alertMessage.alertShow = true;
        this.alertMessage.alertClass =
          "alert alert-danger alert-dismissible fade show";
      }
    );

  }

}
