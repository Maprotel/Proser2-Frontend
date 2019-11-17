// Angular import
import { Component, OnInit, Input, ViewChild } from "@angular/core";

// Installed modules
import { Observable, Subscription, timer } from "rxjs";
import * as moment from "moment";
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
import { AlertService, EnvService } from "shared/services";
import { UserSelectionService } from "shared/services/crud/system/user-selection.service";

// Local models
import { DisplayOutboundResponseModel } from "projects/display/src/app/shared/models/display-outbound/DisplayOutboundResponse.model";

// Local shared
import { DisplayOutboundGraphComponent } from "../display-outbound-graph/display-outbound-graph.component";

import { DisplayOutboundModel } from "projects/display/src/app/shared/models/display-outbound/DisplayOutbound.model";
import { DisplayOutboundIndicatorsService } from "projects/display/src/app/shared/services/display-outbound/display-outbound-indicators.service";
import { DisplayOutboundHighlightsComponent } from "../display-outbound-highlights/display-outbound-highlights.component";

import { faIdBadge, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-display-display-outbound-list",
  templateUrl: "./display-outbound-list.component.html",
  styleUrls: ["./display-outbound-list.component.scss"]
})
export class DisplayOutboundListComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();
  // Child components
  @ViewChild(DisplayOutboundGraphComponent, { static: false })
  private childGraph: DisplayOutboundGraphComponent;

  @ViewChild(DisplayOutboundHighlightsComponent, { static: false })
  private highligthts: DisplayOutboundHighlightsComponent;

  // Variables that come from main component
  displayUserSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;

  // Component variables
  alertMessage = new AlertModel();
  env;

  // Icon
  faIdBadge = faIdBadge;
  faClock = faClock;

  // Selector variables
  // local_store;

  // Realtime variables
  timerConnected;
  currentDate;

  // Show variables
  show_columns = false; // shows or hides a colum
  show = false; // shows or hides the table
  selected = [];
  idealResponseTime;
  historic = false;

  // Filter variables
  numberOfRowsInTable;
  filterFieldList;
  initialSelectedFilterField;
  findInList;

  // Variable to display values
  model: DisplayOutboundModel;
  rows: DisplayOutboundResponseModel;
  rows_original: DisplayOutboundResponseModel;
  rows_total;
  rows_detail;
  rows_detail_original;
  rows_detail_total;
  row_selection;
  exportName;

  // Modal window variables
  activeModal: NgbActiveModal;

  // Graph variables
  graph = false;
  show_graph_or_table_button = false;

  // Init
  constructor(
    private displayOutboundIndicatorsService: DisplayOutboundIndicatorsService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService
  ) {
    this.env = envService;
    this.model = new DisplayOutboundModel();

    this.currentDate = moment(new Date()).format("YYYY-MM-DD");
    this.rows = new DisplayOutboundResponseModel();
    this.rows_original = new DisplayOutboundResponseModel();

    this.displayUserSelection = new UserSelectionModel("standard");
    this.selectorVisibleFields = new UserSelectionModel("visible");

    this.selectorVisibleFields.assignation = false;
    this.selectorVisibleFields.auxiliar = false;
  }

  // Start
  ngOnInit() {
    this.displayUserSelection = new UserSelectionModel("standard");
    this.getReportList();
    this.filterFieldList = this.model.fieldList();
    this.numberOfRowsInTable = { id: 10, value: 10 };
    this.exportName = "reporte-conexión";

    this.initialSelectedFilterField = {
      field_name: "start_date",
      name: "fecha_inicio",
      text: "Fecha desde"
    };
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRepeat() {
    // this.show_outbound = true;
    // this.show_highlights = false;

    const timerComponent = timer(1000, 5000);
    const timerClock = timer(1000, 1000);

    this.getReportList();
    this.subscription.add(
      timerComponent.subscribe(() => {
        if (
          objectDateToTextDate(this.displayUserSelection.start_date) ===
          this.currentDate
        ) {
          // this.historic_mode = false;
          // this.displayUserSelection.historic_mode = false;
          this.getReportList();
        } else {
          // this.historic_mode = true;
          // this.displayUserSelection.historic_mode = true;
        }
      })
    );
    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }

  setHeaderInfo(displayUserSelection) {
    displayUserSelection.title = "Display de llamadas salientes";
    displayUserSelection.options = "";
    displayUserSelection.legend = "";
    return displayUserSelection;
  }

  // Get records from backend
  getReportList() {
    let userSelectionTemp = new UserSelectionModel("standard");
    this.displayUserSelection = this.setHeaderInfo(userSelectionTemp);

    if (this.displayUserSelection) {
      this.displayOutboundIndicatorsService
        .getReportList(this.displayUserSelection)
        .subscribe(
          (res: DisplayOutboundResponseModel) => {
            // this.show = false;

            this.timerConnected = 0;

            if (res) {
              // res.colors = res.colors[0];
              this.rows = res;

        

              // this.childGraph
              //   ? this.childGraph.generateGraph("service", this.rows)
              //   : "";
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
    this.displayUserSelection = new UserSelectionModel("standard");
    this.getReportList();
    this.show_graph_or_table_button = false;
    this.childGraph ? this.childGraph.generateGraph("header", this.rows) : "";
  }

  // Activated by button
  onRecalculate(event) {
    this.displayUserSelection = new UserSelectionModel("standard");
    this.getReportList();
    this.show_graph_or_table_button = false;
    console.error("this.rows", this.rows);

    this.childGraph ? this.childGraph.generateGraph("button", this.rows) : "";
  }

  // Response report finder to display number of rows in table
  onReturnNumberOfRowsInTable(event) {
    console.error("event", event);
    this.numberOfRowsInTable = event;
  }

  // Response report finder
  onReturnRowsForTable(event) {
    this.rows = event;
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
    model = new DisplayOutboundModel().fieldList();

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
    // this.rows_detail = this.rows_detail_original.filter(x => {
    //   return x.agent_id === this.row_selection.agent_id;
    // });
    // this.rows_detail_total = this.rows_original.filter(x => {
    //   return x.agent_id === this.row_selection.agent_id;
    // });
    // this.activeModal = this.modalService.open(content, {
    //   windowClass: "my-class",
    //   keyboard: false
    // });
  }
}
