import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs, "es");
import { LOCALE_ID } from "@angular/core";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertModule } from "shared/modules/alert/alert.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Chart from "chart.js";
import * as ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { SelectorModule } from "shared/modules/selector/selector.module";

import { DisplayHeaderModule } from "../../../shared/modules/display-header/display-header.module";

import { DisplayMonitorRoutingModule } from "./display-monitor-routing.module";
import { DisplayMonitorComponent } from "./display-monitor.component";

import { DisplayMonitorCallsComponent } from "./display-monitor-calls/display-monitor-calls.component";

import { DisplayMonitorIndicatorsComponent } from "./display-monitor-indicators/display-monitor-indicators.component";

import { SharedPipesModule } from "shared/pipes/shared-pipes.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DisplayMonitorComponent,
    DisplayMonitorCallsComponent,
    DisplayMonitorIndicatorsComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgSelectModule,
    NgxDatatableModule,
    Ng2Charts,

    SharedPipesModule,

    SelectorModule,
    DisplayHeaderModule,

    FontAwesomeModule,
    DisplayMonitorRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }]
})
export class DisplayMonitorModule {}
