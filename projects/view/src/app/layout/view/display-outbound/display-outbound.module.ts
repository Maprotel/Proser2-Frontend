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

import { DisplayOutboundRoutingModule } from "./display-outbound-routing.module";
import { DisplayOutboundComponent } from "./display-outbound.component";
import { DisplayOutboundListComponent } from "./display-outbound-list/display-outbound-list.component";
import { DisplayOutboundGraphComponent } from "./display-outbound-graph/display-outbound-graph.component";
import { DisplayOutboundCallsComponent } from "./display-outbound-calls/display-outbound-calls.component";

import { DisplayOutboundLevelsComponent } from "./display-outbound-levels/display-outbound-levels.component";

import { DisplayOutboundHighlightsComponent } from "./display-outbound-highlights/display-outbound-highlights.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DisplayOutboundComponent,
    DisplayOutboundListComponent,
    DisplayOutboundGraphComponent,
    DisplayOutboundCallsComponent,
    DisplayOutboundLevelsComponent,
    DisplayOutboundHighlightsComponent
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

    SelectorModule,
    DisplayHeaderModule,

    FontAwesomeModule,

    DisplayOutboundRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }]
})
export class DisplayOutboundModule {}
