import { Component, OnInit } from "@angular/core";
import { UserSelectionModel, AlertModel } from "shared/models";

import { DisplayMonitorByIndicatorsService } from "sections/view/src/shared/services";
import { DisplayMonitorByIndicatorsModel } from "sections/view/src/shared/models";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";
import { AlertService, UserSelectionService } from "shared/services";
import * as moment from "moment";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import {
  selectionToText,
  optionsToText,
  dateToDatePicker
} from "shared/functions";


import { ExcelService } from "sections/view/src/shared/services/helpers/excel.service";
@Component({
  selector: "app-display-display-monitor-indicators",
  templateUrl: "./display-monitor-indicators.component.html",
  styleUrls: ["./display-monitor-indicators.component.scss"]
})
export class DisplayMonitorIndicatorsComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();

  alertMessage;
  show;

  // User selection
  userSelection;
  selectorVisibleFields;
  old_start_date;
  old_end_date;

  dashboardOptions;
  local_store;

  // data
  rows;
  rows_total;
  update_date;
  update_time;

  // Timer
  timerConnected;
  currentDate;

  // Icon
  faClock = faClock;

  // fake
  historic;
  title;

  //
  exportName;
  selectorVisibleAreas;

  constructor(
    private displayMonitorByIndicatorsService: DisplayMonitorByIndicatorsService,
    private excelService: ExcelService,
    private userSelectionService: UserSelectionService,
    private alertService: AlertService
  ) {
    this.userSelection = new UserSelectionModel("userSelection");
    this.selectorVisibleFields = new UserSelectionModel("menuOptions");
    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;
    this.selectorVisibleFields.start_time = false;
    this.selectorVisibleFields.end_time = false;
    this.rows = new DisplayMonitorByIndicatorsModel();
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
    this.exportName = "Indicadores_tiempo_real";
    this.selectorVisibleAreas = {
      date: true,
      interval: false,
      options: false,
      buttons: false,
    }
  }

  ngOnInit() {
    this.title = ("Indicadores tiempo real");
    this.userSelectionCurrent();
    this.getMonitorList(this.userSelection);
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.userSelection.end_date = this.old_end_date;
    this.userSelection.start_date = this.old_start_date;

    this.userSelectionService.writeUserSelectionCurrent(this.userSelection);
    this.subscription.unsubscribe();
  }

  onSelect(event) { }

  // Get records from backend
  getMonitorList(userSelection: UserSelectionModel) {
    this.userSelection.mode = { id: 0, name: "Actual", value: 'actual' };
    this.userSelection.start_date = this.userSelection.current_date;
    this.userSelection.end_date = this.userSelection.current_date;
    this.displayMonitorByIndicatorsService
      .getReportList(userSelection)
      .subscribe(
        res => {
          this.timerConnected = 0;
          if (res) {
            this.rows = res.detail;
            this.rows_total = res.total;
            this.update_date = res.now;
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

  // Update on return of selector in header
  onReturnHeaderResult(event) {
    this.show = false;
    this.userSelection = this.userSelectionService.readUserSelectionCurrent(
      this.local_store
    );

    this.getMonitorList(this.userSelection);
  }

  // Real time repeat
  onRepeat() {
    let timerComponent = timer(1000, 5000);
    let timerClock = timer(1000, 1000);

    this.getMonitorList(this.userSelection);

    this.subscription.add(
      timerComponent.subscribe(() => {
        this.getMonitorList(this.userSelection);
      })
    );

    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }


  // Export to excel
  exportToExcel(data) {
    const filterData = data.map(x => {
      return {

        cola: x.queueName,

        nombre_dia: x.day_name,
        dia_semana: x.week_day,
        fecha_inicio: x.start_date,
        hora_inicio: x.start_time,
        hora_fin: x.end_time,

        llamadas_recibidas: x.inboundReceived,
        llamadas_abandonadas: x.inboundAbandoned,
        llamadas_atendidas: x.inboundAttended,
        llamadas_cortas: x.inboundShort,

        tiempo_ideal_respuesta: x.idealResponseTime,

        llamadas_atendidas_antes_de: x.inboundBeforeTime,
        llamadas_atendidas_despues_de: x.inboundAfterTime,

        nivel_servicio: x.inboundServiceLevel,
        nivel_atencion: x.inboundAttentionLevel,
        nivel_abandono: x.inboundAbandonLevel,

        seg_operacion: x.operation_seconds,
        tiempo_operacion: x.operation_time,

        seg_espera: x.wait_seconds,
        tiempo_espera: x.wait_time,

        tmo_entrante: x.inboundTmo,
        asa_entrante: x.inboundAsa,


      };
    });

    this.excelService.exportAsExcelFile(filterData, this.exportName);
  }


  userSelectionCurrent() {
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
    this.selectorVisibleFields.groupBy = false;
    this.selectorVisibleFields.interval = false;
    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;

    this.selectorVisibleFields.start_date = false;
    this.selectorVisibleFields.end_date = false;

    this.userSelection.title = this.title;

    this.userSelection.mode = { id: 0, name: "Actual", value: "actual" };
    this.userSelection.start_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.end_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );
    this.userSelection.current_date = dateToDatePicker(
      moment().format("YYYY-MM-DD")
    );

    this.userSelectionService.writeUserSelectionCurrent(this.userSelection);
    this.userSelection = this.userSelectionService.readUserSelectionCurrent();
  }
}
