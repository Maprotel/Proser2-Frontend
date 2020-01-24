// Angular import
import { Component, OnInit, Input, ViewChild } from "@angular/core";

// Installed modules
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

// Global shared functions import
import { getUpdateFilter } from "shared/functions";
import { objectDateToTextDate, textDateToObjectDate } from "shared/functions";

// Global shared models
import { AlertModel } from "shared/models/helpers/Alert";
import { UserSelectionModel } from "shared/models";

// Global shared services
import { AlertService } from "shared/services";
import { UserSelectionService } from "shared/services/crud/system/user-selection.service";
import { ExcelService } from "sections/reports/src/shared/services/helpers/excel.service";

// Local models
import { BackendResponseModel } from "sections/reports/src/shared/models/reports/backendResponse.model";

// Local shared

import { CallsIndicatorsByIntervalService } from "sections/reports/src/shared/services/reports/calls/reports-calls-indicators-interval.service";
import { CallsIndicatorsByIntervalModel } from "sections/reports/src/shared/models/reports/calls/CallsIndicatorsByInterval.model";
import { CallsIndicatorsByIntervalReportGraphComponent } from "../calls-indicators-interval-report-graph/calls-indicators-interval-report-graph.component";

@Component({
  selector: "app-reports-calls-indicators-interval-report-list",
  templateUrl: "./calls-indicators-interval-report-list.component.html",
  styleUrls: ["./calls-indicators-interval-report-list.component.scss"]
})
export class CallsIndicatorsByIntervalReportListComponent implements OnInit {
  // Child components
  @ViewChild(CallsIndicatorsByIntervalReportGraphComponent, { static: false })
  private childGraph: CallsIndicatorsByIntervalReportGraphComponent;

  // Variables that come from main component
  @Input() userSelection: UserSelectionModel;
  @Input() selectorVisibleFields: UserSelectionModel;

  // Component variables
  alertMessage = new AlertModel();

  // Selector variables
  local_store;

  // Realtime variables
  timerConnected;

  // Datatable variables
  show_columns = false; // shows or hides a colum
  show = false; // shows or hides the table
  selected = [];

  // Filter variables
  numberOfRowsInTable;
  filterFieldList;
  initialSelectedFilterField;
  findInList;

  // Variable to display values
  model: CallsIndicatorsByIntervalModel;
  rows;
  rows_original;
  rows_total;
  rows_subtotal;
  rows_detail;
  rows_detail_original;
  temp_rows_detail_original;
  rows_detail_total;
  row_selection;
  exportName;
  rows_valid;
  idealResponseTime;

  rows_detail_subtotal;

  // Modal window variables
  activeModal: NgbActiveModal;

  // Graph variables
  graph = false;
  show_graph_or_table_button = false;

  // Init
  constructor(
    private callsIndicatorsByIntervalService: CallsIndicatorsByIntervalService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService,
    private excelService: ExcelService
  ) {
    this.model = new CallsIndicatorsByIntervalModel();
    this.local_store = "assignation";
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }

  // Start
  ngOnInit() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.filterFieldList = this.model.fieldList();
    this.numberOfRowsInTable = { id: 10, value: 10 };
    this.exportName = "reporte-indicadores-intervalo";

    this.initialSelectedFilterField = {
      field_name: "start_date",
      name: "fecha_inicio",
      text: "Fecha desde"
    };
  }

  // Finish
  ngOnDestroy() {
    this.userSelectionService.writeUserSelectionHistoric(
      this.userSelection,

    );
  }

  // Get records from backend
  getReportList(userSelection) {
    if (userSelection) {
      this.rows = [new CallsIndicatorsByIntervalModel()];
      this.callsIndicatorsByIntervalService
        .getReportList(userSelection)
        .subscribe(
          (res: BackendResponseModel) => {
            this.show = false;

            this.timerConnected = 0;
            // console.error("res", res);

            if (Array.isArray(res.detail)) {
              this.rows_valid = res.detail[0] === undefined ? false : true;

              this.rows = res.detail;
              this.rows_original = res.detail;
              this.rows_subtotal = res.subtotal;
              this.rows_total = res.total;

              this.temp_rows_detail_original = (this.rows_original).concat(this.rows_subtotal)
              this.rows_detail_subtotal = (this.temp_rows_detail_original).sort(
                function (o1,o2) {
                if (o1.start_date > o2.start_date) { 
                  return 1;
                } else if (o1.start_date < o2.start_date) {
                  return -1;
                } 
                return 0;
              });

              this.rows_detail = res.detail;
              this.rows_detail_original = res.detail;

              this.idealResponseTime = this.rows_total[0].idealResponseTime;

              this.show = true;
              this.childGraph
                ? this.childGraph.generateGraph("service", this.rows)
                : "";
            } else {
              console.error("Error", res);
            }
            this.alertMessage = new AlertModel();
          },
          error => {
            console.error("Error", error);
            this.show = false;
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

  // Show modal detail window
  openDetailModal(content, selected) {
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  // Show or hide graph or table buttons
  onShowHideGraphButtons() {
    this.graph = !this.graph;
    this.show_graph_or_table_button = !this.show_graph_or_table_button;
  }
  // Data table activate
  onActivate(event) {
    this.row_selection = event.row;
    if (event.type === "dblclick") {
    }
  }
  // Datatable select
  onSelect(event) {
    this.selected = event.selected;
  }

  // Update on return of selector in header
  onReturnHeaderResult(event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.show_graph_or_table_button = false;
    this.childGraph ? this.childGraph.generateGraph("header", this.rows) : "";
  }

  // Activated by button
  onRecalculate(event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.show_graph_or_table_button = false;
    // console.error("this.rows", this.rows);

    this.childGraph ? this.childGraph.generateGraph("button", this.rows) : "";
  }

  // Response report finder to display number of rows in table
  onReturnNumberOfRowsInTable(event) {
    // console.error("event", event);
    this.numberOfRowsInTable = event;
  }

  // Response report finder
  onReturnRowsForTable(event) {
    this.rows = event;
  }

  // Export to excel
  exportToExcel(data, total) {
    const filterData = (data.concat(total)).map(x => {
      return {

        fecha: x.start_date,
        intervalo_inicial: x.interval_start,
        intervalo_final: x.interval_end,
        recibidas: x.inboundReceived,
        atendidas: x.inboundAttended,
        atendidas_antes_de_20s: x.inboundBeforeTime,
        atendidas_antes_de_60s: x.inboundBeforeMinute,
        porcentaje_nivel_servicio_20s: ((x.inboundServiceLevel)*100).toFixed(2),
        porcentaje_nivel_servicio_60s: ((x.inboundServiceLevelMinute)*100).toFixed(2),
        porcentaje_nivel_atencion: ((x.inboundAttentionLevel)*100).toFixed(2),
        tmo: Math.trunc(x.inboundTmo),
        t_prom_espera_contest: Math.trunc(x.avgWaitTimeAnswer),
        t_prom_espera_abandon: Math.trunc(x.avgWaitTimeAbandon),
        t_max_espera_contest: Math.trunc(x.maxWaitTimeAnswer),
        t_max_espera_abandon: Math.trunc(x.maxWaitTimeAbandon),
        abandonadas: x.inboundAbandoned,
        porcentaje_nivel_abandono: ((x.inboundAbandonLevel)*100).toFixed(2)

      };
    });

    this.excelService.exportAsExcelFile(filterData, this.exportName);
  }

  // Helper function to expose detail fields from a row
  onObjectToArray(data) {
    let obj = data[0];

    let output;
    if (obj !== undefined) {
      output = Object.entries(obj).map(([key, value]) => ({
        key,
        value
      }));
    }
    return output;
  }

  // temporary method to generate excel map for exporting model
  onCreateModel(model?) {
    model = new CallsIndicatorsByIntervalModel().fieldList();

    // console.error("model", model);

    let obj = {};

    model.map(x => {
      obj[`${x.name}`] = "x." + x.field_name;
    });

    let newModel = JSON.stringify(obj);
    let newModel2 = JSON.stringify(
      newModel
        .replace(/\"/g, "")
        .replace(/:/g, ": ")
        .replace(/,/g, ",\n ")
    );
    let model3 = eval(newModel2);

    // console.error("model", model3);
  }

  //Test function for modal
  openModal(content) {
    this.rows_detail = this.rows_detail_original.filter(x => {
      return x.agent_id === this.row_selection.agent_id;
    });

    this.rows_detail_total = this.rows_original.filter(x => {
      return x.agent_id === this.row_selection.agent_id;
    });

    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }
}
