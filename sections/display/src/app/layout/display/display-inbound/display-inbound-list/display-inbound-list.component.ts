import { ProShowDisplayModel } from 'shared/models';
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
import { DisplayInboundResponseModel } from "sections/display/src/shared/models/display-inbound/DisplayInboundResponse.model";

// Local shared
import { DisplayInboundGraphComponent } from "../display-inbound-graph/display-inbound-graph.component";

import { DisplayInboundModel } from "sections/display/src/shared/models/display-inbound/DisplayInbound.model";
import { DisplayInboundIndicatorsService } from "sections/display/src/shared/services/display-inbound/display-inbound-indicators.service";
import { DisplayInboundHighlightsComponent } from "../display-inbound-highlights/display-inbound-highlights.component";

import { faIdBadge, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-display-display-inbound-list",
  templateUrl: "./display-inbound-list.component.html",
  styleUrls: ["./display-inbound-list.component.scss"]
})
export class DisplayInboundListComponent implements OnInit {
  // Subscription
  private subscription: Subscription = new Subscription();
  // Child components
  @ViewChild(DisplayInboundGraphComponent)
  private childGraph: DisplayInboundGraphComponent;

  @ViewChild(DisplayInboundHighlightsComponent)
  private highligthts: DisplayInboundHighlightsComponent;

  timerComponent;
  timerClock;

  // Variables that come from main component
  userSelection: UserSelectionModel;
  selectorVisibleFields: UserSelectionModel;

  // Icon
  faIdBadge = faIdBadge;
  faClock = faClock;

  // Component variables
  alertMessage = new AlertModel();
  env;

  // Selector variables
  local_store;

  // Realtime variables
  timerConnected;
  currentDate;

  // Show variables
  show_columns = false; // shows or hides a colum
  show = false; // shows or hides the table
  selected = [];
  idealResponseTime;
  historic = false;
  show_header = false;

  // Filter variables
  numberOfRowsInTable;
  filterFieldList;
  initialSelectedFilterField;
  findInList;
  proShowDisplayRes: [ProShowDisplayModel];

  // Variable to display values
  model: DisplayInboundModel;
  rows: DisplayInboundResponseModel;
  rows_original: DisplayInboundResponseModel;
  rows_total;
  rows_detail;
  rows_detail_original;
  rows_detail_total;
  row_selection;
  exportName;

  // Modal window variables
  activeModal: NgbActiveModal;



  // Init
  constructor(
    private displayInboundIndicatorsService: DisplayInboundIndicatorsService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService
  ) {
    this.env = envService;
    this.model = new DisplayInboundModel();

    this.currentDate = moment(new Date()).format("YYYY-MM-DD");
    this.rows = new DisplayInboundResponseModel();
    this.rows_original = new DisplayInboundResponseModel();

    this.proShowDisplayRes = [new ProShowDisplayModel];
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.getDisplayShow();

  }

  // Start
  ngOnInit() {
    this.userSelection = this.setHeaderInfo();
    this.userSelection.title = "PRUEBA"; 
    console.log(this.userSelection, "this.userSelection");
    // this.getReportList();
    // this.onRepeat();
  }

  setHeaderInfo() {
    let userSelection: UserSelectionModel = new UserSelectionModel();
    let proShowDisplay: ProShowDisplayModel = this.proShowDisplayRes[0];
    userSelection.start_time = proShowDisplay.pro_show_display_start_time;
    userSelection.end_time = proShowDisplay.pro_show_display_end_time;
    proShowDisplay.pro_show_display_type == "actual"
      ? (userSelection.start_date = moment().format("YYYY-MM-DD"))
      : (userSelection.start_date = moment().subtract(1, 'd').format('YYYY-MM-DD'));
    userSelection.end_date = moment().format("YYYY-MM-DD");

    userSelection.title = "Display de llamadas entrantes";
    userSelection.options =
      userSelection.start_time + "-" + userSelection.end_time;
    userSelection.legend = proShowDisplay.pro_show_display_name;

    this.show_header = true;

    return userSelection;
  }

  getDisplayShow() {
    this.displayInboundIndicatorsService
      .getDisplayShow()
      .subscribe(
        res => {
          this.proShowDisplayRes = res;
          console.log(this.proShowDisplayRes, "this.proShowDisplayRes");

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