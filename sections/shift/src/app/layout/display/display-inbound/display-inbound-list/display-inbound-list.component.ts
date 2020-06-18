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
import { ProShowDisplayModel } from "shared/models";

// Global shared services
import { AlertService, EnvService } from "shared/services";
import { UserSelectionService } from "shared/services/crud/system/user-selection.service";
import { ProShowDisplayService } from "shared/services/";

// Local models
import { DisplayInboundResponseModel } from "sections/shift/src/shared/models/display-inbound/DisplayInboundResponse.model";

// Local shared
import { DisplayInboundGraphComponent } from "../display-inbound-graph/display-inbound-graph.component";

import { DisplayInboundModel } from "sections/shift/src/shared/models/display-inbound/DisplayInbound.model";
import { DisplayInboundIndicatorsService } from "sections/shift/src/shared/services/display-inbound/display-inbound-indicators.service";
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
  proShowDisplay: ProShowDisplayModel;

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
  showNoValidShift = true;

  // Init
  constructor(
    private displayInboundIndicatorsService: DisplayInboundIndicatorsService,
    private alertService: AlertService,
    private envService: EnvService,
    private modalService: NgbModal,
    private userSelectionService: UserSelectionService,
    private proShowDisplayService: ProShowDisplayService
  ) {
    this.env = envService;
    this.model = new DisplayInboundModel();

    this.currentDate = moment(new Date()).format("YYYY-MM-DD");
    this.rows = new DisplayInboundResponseModel();
    this.rows_original = new DisplayInboundResponseModel();

    this.userSelection = new UserSelectionModel("userSelection");
    this.proShowDisplayRes = [new ProShowDisplayModel()];
    this.selectorVisibleFields = new UserSelectionModel("visible");
    this.onGetProShowList();
  }

  // Start
  ngOnInit() {
    // this.userSelection.title = "PRUEBA";
    // this.getReportList();
    this.onRepeat();
  }

  onGetProShowList() {
    this.proShowDisplayService.getRecords().subscribe(
      data => {
        this.userSelection = new UserSelectionModel("userSelection");
        let today = moment().format("YYYY-MM-DD");
        let now = moment().format("YYYY-MM-DD HH:mm:ss");
        let now_week_day = moment().weekday();

        let myData = data
          .map(x => {
            let record = {
              pro_show_display_id: x.pro_show_display_id,
              pro_show_display_name: x.pro_show_display_name,
              pro_show_display_weekday: JSON.parse(
                JSON.parse(JSON.stringify(x.pro_show_display_weekday))
              ),
              pro_show_display_start_time: x.pro_show_display_start_time,
              pro_show_display_end_time: x.pro_show_display_end_time,
              pro_show_display_type: JSON.parse(x.pro_show_display_type),
              pro_show_display_selection: x.pro_show_display_selection,
              pro_show_display_view: x.pro_show_display_view,
              pro_show_display_status: x.pro_show_display_status,
              days: "",
              day_of_week: JSON.parse(
                JSON.parse(JSON.stringify(x.pro_show_display_weekday))
              )
                .map(x => {
                  return x.id == now_week_day;
                })
                .filter(x => {
                  return x == true;
                }),
              start_datetime: this.onConvertDate(
                today + " " + x.pro_show_display_start_time,
                JSON.parse(x.pro_show_display_type)
              ),
              end_datetime: today + " " + x.pro_show_display_end_time
            };

            record.days = record.pro_show_display_weekday.map(x => {
              return "  " + x.value + "  ";
            });

            return record;
          })
          .filter(x => {
            return x.day_of_week[0] == true; //.day_of_week == true;
          })
          .filter(x => {
            return moment(x.end_datetime) >= moment(now);
          })
          .filter(x => {
            return moment(x.start_datetime) <= moment(now);
          });

        // Show hide data
        if (myData[0]) {
          this.showNoValidShift = false;
        } else {
          this.showNoValidShift = true;
          // myData = [new ProShowDisplayModel()];
        }

        let emptyData = [new ProShowDisplayModel()];

        console.log("myData", myData, emptyData);
        data
          ? (this.proShowDisplay = myData[0])
          : (this.proShowDisplay = new ProShowDisplayModel());

        this.proShowDisplay.pro_show_display_start_time = {
          id: 0,
          value: this.proShowDisplay.pro_show_display_start_time
        };
        this.proShowDisplay.pro_show_display_end_time = {
          id: 0,
          value: this.proShowDisplay.pro_show_display_end_time
        };

        // "start_time_hour": { "hour": 0, "minute": 0, "second": 0, "value": "00:00:00" }, "end_time_hour": { "hour": 23, "minute": 59, "second": 59, "value": "23:59:59" }

        this.userSelection.start_time = this.proShowDisplay.pro_show_display_start_time;
        this.userSelection.end_time = this.proShowDisplay.pro_show_display_end_time;

        this.userSelection.start_date = moment().format("YYYY-MM-DD");
        // this.proShowDisplay.pro_show_display_type == "previo"
        //   ? (this.userSelection.start_date = moment()
        //       .subtract(1, "d")
        //       .format("YYYY-MM-DD"))
        //   : (this.userSelection.start_date = moment().format("YYYY-MM-DD"));
        this.userSelection.end_date = moment().format("YYYY-MM-DD");

        this.userSelection.legend = `${this.env.callcenterName}`;
        this.userSelection.entity_selection = `${this.proShowDisplay.pro_show_display_name}`;

        this.userSelection.title = "Display de llamadas entrantes";
        this.userSelection.options =
          this.proShowDisplay.pro_show_display_start_time.value +
          " a " +
          this.proShowDisplay.pro_show_display_end_time.value;

        this.getReportList();

        this.show_header = true;
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

  // Get records from backend
  getReportList() {
    this.displayInboundIndicatorsService
      .getReportList(this.userSelection)
      .subscribe(
        (res: DisplayInboundResponseModel) => {
          this.timerConnected = 0;

          if (res) {
            this.rows = res;

            this.userSelection = res.userSelection;
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

  onRepeat() {
    if (true) {
      this.timerComponent = timer(1000, 5000);
      this.timerClock = timer(1000, 1000);

      this.getReportList();
      this.subscription.add(
        this.timerComponent.subscribe(() => {
          this.onGetProShowList();
        })
      );

      this.timerClock.subscribe(() => {
        this.timerConnected = this.timerConnected + 1;
      });
    } else {
      this.subscription.unsubscribe();
      // this.timerComponent.unsubscribe();
      // this.timerClock.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.timerComponent.unsubscribe();
    // this.timerClock.unsubscribe();
  }

  onConvertDate(date, display) {
    let result;
    let myDate = moment(date);
    let type = display.name;

    if (display.name == "previo") {
      myDate = myDate.subtract(1, "days");
      result = myDate.format("YYYY-MM-DD HH:mm:ss");
    } else {
      result = myDate.format("YYYY-MM-DD HH:mm:ss");
    }
    return result;
  }
}
