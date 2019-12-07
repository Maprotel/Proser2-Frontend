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

import { CallsInboundDailyModel } from "sections/reports/src/shared/models/reports/calls/CallsInboundDaily.model";
import { CallsInboundDailyService } from "sections/reports/src/shared/services/reports/calls/reports-inbound.service";
import { InboundReportGraphComponent } from "../inbound-report-graph/inbound-report-graph.component";

@Component({
  selector: "app-reports-inbound-report-list",
  templateUrl: "./inbound-report-list.component.html",
  styleUrls: ["./inbound-report-list.component.scss"]
})
export class InboundReportListComponent implements OnInit {

  // Subscription
  private subscription: Subscription = new Subscription();

  // Child components
  @ViewChild(InboundReportGraphComponent, { static: false })
  private childGraph: InboundReportGraphComponent;

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
  model: CallsInboundDailyModel;
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
    private callsInboundDailyService: CallsInboundDailyService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService,
    private excelService: ExcelService
  ) {
    this.env = envService;
    this.model = new CallsInboundDailyModel();
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
    this.exportName = "reporte-entrante";

    this.initialSelectedFilterField = {
      field_name: "start_date",
      name: "fecha_inicio",
      text: "Fecha desde"
    };

    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.userSelectionService.writeUserSelectionHistoric(
      this.userSelection,
    );
  }

  // Real time repeat
  onRepeat() {
    let timerComponent = timer(1000, 5000);
    let timerClock = timer(1000, 1000);

    this.getReportList(this.userSelection);

    this.subscription.add(
      timerComponent.subscribe(() => {
        this.getPing();
        !this.backendConnected ? this.getReportList(this.userSelection) : ''
      })
    );

    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }

  getPing() {
    this.callsInboundDailyService.ping()
      .subscribe(
        res => {
          // console.log('Res ping', res);
          // this.alertMessage.onResetAlert()
          this.backendConnected = true
        },
        error => {
          console.error("Error - getPing", error, error.status);
          this.alertMessage.onAlertError(error)
          this.backendConnected = false
          this.show = false;
        })
  }

  // Get records from backend
  getReportList(userSelection) {
    if (userSelection) {
      this.rows = [new CallsInboundDailyModel()];
      this.callsInboundDailyService.getReportList(userSelection).subscribe(
        (res: BackendResponseModel) => {
          this.alertMessage.onResetAlert();
          this.show = false;
          this.timerConnected = 0;
          if (Array.isArray(res.detail)) {
            this.rows_valid = res.detail[0] === undefined ? false : true;

            this.rows = res.detail;
            this.rows_original = res.group;
            this.rows_total = res.total;

            this.rows_detail = res.detail;
            this.rows_detail_original = res.detail;

            this.show = true;

            this.idealResponseTime = this.rows_total[0].idealResponseTime;
            this.childGraph
              ? this.childGraph.generateGraph("service", this.rows)
              : "";
          } else {
            console.error("Error", res);
          }
          this.alertMessage = false
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

    this.childGraph ? this.childGraph.generateGraph("button", this.rows) : "";
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

        fecha: x.start_date,
        hora_inicio: x.start_time,
        hora_final: x.end_time,
        recibidas: x.inboundReceived,
        atendidas: x.inboundAttended,
        atendidas_antes_de: x.inboundBeforeTime,
        atendidas_despues_de: x.inboundAfterTime,
        abandonadas: x.inboundAbandoned,
        cortas: x.inboundShort,
        colgadas_agente: x.inboundHungAgent,
        nivel_servicio: x.inboundServiceLevel,
        nivel_atencion: x.inboundAttentionLevel,
        nivel_abandono: x.inboundAbandonLevel,
        tmo: x.inboundTmo,
        asa: x.inboundAsa,
        seg_operacion: x.operation_seconds,
        hrs_operacion: x.operation_time,
        seg_espera: x.wait_seconds,
        hrs_espera: x.wait_time
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
    model = new CallsInboundDailyModel().fieldList();

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
