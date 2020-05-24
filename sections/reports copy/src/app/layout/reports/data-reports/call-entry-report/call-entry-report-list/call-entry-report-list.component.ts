import { Component, OnInit, Input } from "@angular/core";

import { AlertModel } from "shared/models/helpers/Alert";
import { AlertService } from "shared/services";

import { getUpdateFilter } from "shared/functions";

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

import { UserSelectionService } from "shared/services/crud/system/user-selection.service";

import { UserSelectionModel } from "shared/models";

import {
  objectDateToTextDate,
  textDateToObjectDate
} from "shared/functions";

import { ExcelService } from 'sections/reports/src/shared/services';
import { MainCallEntryService } from "sections/reports/src/shared/services/reports/data/reports-main-call-entry.service";
import { MainCallEntryReportModel } from "sections/reports/src/shared/models/reports/data/MainCallEntryReport.model";

@Component({
  selector: "app-reports-call-entry-report-list",
  templateUrl: "./call-entry-report-list.component.html",
  styleUrls: ["./call-entry-report-list.component.scss"]
})
export class CallEntryReportListComponent implements OnInit {
  @Input() userSelection: UserSelectionModel;
  @Input() selectorVisibleFields: UserSelectionModel;

  numberOfRowsInTable;
  selectedAsArray;
  filterFieldList;

  rows;
  rows_original;
  selection;
  findInList;

  selected = [];
  show_columns = false;
  alertMessage = new AlertModel();

  local_store;
  agent;

  show = false;
  timerConnected;

  activeModal: NgbActiveModal;
  initialSelectedFilterField;

  model: MainCallEntryReportModel;
  exportName;


  callentry_id;
  inv_agent_name;
  callentry_queue_id;
  inv_queue_number;
  callentry_datetime_init;
  callentry_datetime_end;
  callentry_duration_sec;
  callentry_contact_id;
  countCdrDate;
  callentry_callerid;
  sortFn;


  constructor(
    private mainCallEntryService: MainCallEntryService,
    private alertService: AlertService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService,
    private excelService: ExcelService
  ) {
    this.model = new MainCallEntryReportModel();
    this.local_store = "assignation";
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }

  ngOnInit() {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
    this.filterFieldList = this.model.fieldList();
    this.numberOfRowsInTable = { id: 10, value: 10 };
    this.exportName = "reporte-call-entry";

    this.initialSelectedFilterField = {
      field_name: "callentry_uniqueid",
      name: "identificador_llamada",
      text: "Identificador"
    };
  }

  ngOnDestroy() {
    this.userSelectionService.writeUserSelectionHistoric(
      this.userSelection,
      
    );
  }

  getReportList(userSelection) {
    if (userSelection) {
      this.rows = [new MainCallEntryReportModel()];

      this.mainCallEntryService.getReportList(userSelection).subscribe(
        (res: [MainCallEntryReportModel]) => {
          this.show = false;

          this.timerConnected = 0;

          if (Array.isArray(res)) {
            this.rows = res;
            this.rows_original = res;
            this.show = true;
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

  updateSelection($event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
  }

  closeSelector($event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.ngOnInit();
  }
  onActivate(event, ngModelDir?) {
    if (event.type === "dblclick") {
    }
  }

  // Activated by button
  onRecalculate(event) {
    this.userSelection = this.userSelectionService.readUserSelectionHistoric(
      this.local_store
    );
    this.getReportList(this.userSelection);
  }

  onSelect(event) {
    this.selected = event.selected;
  }

  onOpenDetailWindow(content) {
    this.selectedAsArray = this.onObjectToArray(this.selected[0]);
    this.openModal(content);
  }

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

  onChange() {}

  openModal(content) {
    this.activeModal = this.modalService.open(content, {
      windowClass: "my-class",
      keyboard: false
    });
  }

  onUpdateReport(event) {
    this.getReportList(this.userSelection);
  }

  onGetAll() {
    this.findInList = "";
    this.getReportList(this.userSelection);
  }

  // Update on return of selector in header
  onReturnHeaderResult(event) {
    this.ngOnInit();
  }

  onReturnNumberOfRowsInTable(event) {
    console.error("event", event);
    this.numberOfRowsInTable = event;
  }

  onReturnRowsForTable(event) {
    this.rows = event;
  }

  onCreateModel(model?) {
    model = new MainCallEntryReportModel().fieldList();

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

  exportToExcel(data) {
    const filterData = data.map(x => {
      return {

       id: x.callentry_id,
       agente: x.inv_agent_name,
       id_cola: x.callentry_queue_id,
       cola_numero: x.inv_queue_number,
       entrada_en_cola: x.callentry_datetime_entry_queue,
       inicio: x.callentry_datetime_init,
       final: x.callentry_datetime_end,
       duracion_seg: x.callentry_duration_sec,
       estatus: x.callentry_status,
       espera_seg: x.callentry_duration_sec_wait,
       uniqueid: x.callentry_uniqueid,
       campaña: x.callentry_campaign_id,
       trunk: x.callentry_trunk,
       fecha: x.callentry_date,
       tiempo_expirado: x.callentry_queue_time_expired,
       tipo: x.callentry_type,
       auto_campaña: x.callentry_auto_campaign,
       numero_cola: x.callentry_queue_number,
       colgada: x.callentry_who_hung,
       colgada_agente: x.callentry_hung_agent,
       colgada_llamante: x.callentry_hung_caller,
       id_llamante: x.callentry_contact_id,
       llamante: x.callentry_callerid,
       transferido: x.callentry_transfer
      };
    });

    this.excelService.exportAsExcelFile(filterData, this.exportName);
  }
}
