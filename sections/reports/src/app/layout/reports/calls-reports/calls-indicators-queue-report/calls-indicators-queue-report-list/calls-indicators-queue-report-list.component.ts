// Angular import
import { Component, OnInit, Input, ViewChild } from "@angular/core";

// Installed modules
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subscription, timer } from "rxjs";

// Global shared functions import
import { getUpdateFilter } from "shared/functions";
import { objectDateToTextDate, textDateToObjectDate } from "shared/functions";

// Global shared models
import { AlertModel } from "shared/models/helpers/Alert";

import { UserSelectionModel } from "shared/models";

// Global shared services
import { AlertService, EnvService } from "shared/services";
import { UserSelectionService } from "shared/services/crud/system/user-selection.service";
import { ExcelService } from "sections/reports/src/shared/services/helpers/excel.service";

// Local models
import { BackendResponseModel } from "sections/reports/src/shared/models/reports/backendResponse.model";

// Local shared

import { CallsIndicatorsByQueueModel } from "sections/reports/src/shared/models/reports/calls/CallsIndicatorsByQueue";
import { CallsIndicatorsByQueueService } from "sections/reports/src/shared/services/reports/calls/reports-calls-indicators-queue.service";


@Component({
  selector: "app-reports-calls-indicators-queue-report-list",
  templateUrl: "./calls-indicators-queue-report-list.component.html",
  styleUrls: ["./calls-indicators-queue-report-list.component.scss"]
})
export class CallsIndicatorsByQueueReportListComponent implements OnInit {

  // Subscription
  private subscription: Subscription = new Subscription();

 

  // Variables that come from main component
  @Input() userSelection: UserSelectionModel;
  @Input() selectorVisibleFields: UserSelectionModel;

  // Component variables
  alertMessage = new AlertModel();

  env;

  // Selector variables
  local_store;

  // Realtime variables
  timerConnected;
  backendConnected;

  // Datatable variables
  show_columns = false; // shows or hides a colum
  show = false; // shows or hides the table
  selected = [];
  idealResponseTime;

  // Filter variables
  numberOfRowsInTable;
  filterFieldList;
  initialSelectedFilterField;
  findInList;

  // Variable to display values
  model: CallsIndicatorsByQueueModel;
  rows;
  rows_original;
  rows_total;
  rows_detail;
  rows_detail_original;
  rows_detail_total;
  row_selection;
  exportName;
  rows_valid;

  // Modal window variables
  activeModal: NgbActiveModal;

  // Graph variables
  graph = false;
  show_graph_or_table_button = false;


  // Init
  constructor(
    private callsIndicatorsByQueueService: CallsIndicatorsByQueueService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService,
    private excelService: ExcelService
  ) {
    this.env = envService;
    this.model = new CallsIndicatorsByQueueModel();
    this.local_store = "assignation";
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
    this.timerConnected = 0;
    this.backendConnected = true;
  }

  // Start
  ngOnInit() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.filterFieldList = this.model.fieldList();
    this.numberOfRowsInTable = { id: 10, value: 10 };
    this.exportName = "reporte-indicadores-colas";

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
      this.rows = [new CallsIndicatorsByQueueModel()];
      this.callsIndicatorsByQueueService.getReportList(userSelection).subscribe(
        (res: BackendResponseModel) => {
          this.alertMessage.onResetAlert();
          this.show = false;
          this.timerConnected = 0;
          if (Array.isArray(res.detail)) {
            this.rows_valid = res.detail[0] === undefined ? false : true;

            this.rows = res.detail;
            this.rows_original = res.detail;
            this.rows_total = res.total;

            this.rows_detail = res.detail;
            this.rows_detail_original = res.detail;

            this.show = true;

            this.idealResponseTime = this.rows_total[0].idealResponseTime;
           
          } else {
            console.error("Error", res);
          }
        },
        error => {
          // console.error("Error - getReportList", error, error.status);
          this.show = false;
          this.alertMessage.onAlertError(error)
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
    
  }

  // Activated by button
  onRecalculate(event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.show_graph_or_table_button = false;

  }

  // Response report finder to display number of rows in table
  onReturnNumberOfRowsInTable(event) {
    this.numberOfRowsInTable = event;
  }

  // Response report finder
  onReturnRowsForTable(event) {
    this.rows = event;
  }

  // Export to excel
  exportToExcel(data) {
    const filterData = data.map(x => {
      return {

        nombre_cola: x.queueName,
        fecha_inicio: x.start_date,
        fecha_final: x.end_date,
        llamadas_recibidas: x.inboundReceived,
        llamadas_atendidas: x.inboundAttended,
        llamadas_atendidas_antes_de: x.inboundBeforeTime,
        llamadas_atendidas_despues_de: x.inboundAfterTime,
        llamadas_abandonadas: x.inboundAbandoned,
        llamadas_cortas: x.inboundShort,
        llamadas_colgadas_agente: x.inboundHungAgent,
        nivel_servicio: x.inboundServiceLevel,
        nivel_atencion: x.inboundAttentionLevel,
        nivel_abandono: x.inboundAbandonLevel,
        tmo: x.inboundTmo,
        asa: x.inboundAsa,
        segundos_operacion: x.operation_seconds,
        tiempo_operacion: x.operation_time,
        segundos_espera: x.wait_seconds,
        tiempo_espera: x.wait_time
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
    model = new CallsIndicatorsByQueueModel().fieldList();

    console.error("model", model);

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

    console.error("model", model3);
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

  closeModal() {
    this.activeModal.close();
  }
}
