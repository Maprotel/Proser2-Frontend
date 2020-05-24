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

import { ReportHeaderModule } from "sections/reports/src/shared/modules/report-header/report-header.module";
import { ReportFinderModule } from "sections/reports/src/shared/modules/report-finder/report-finder.module";


import { CallsIndicatorsByIntervalReportRoutingModule } from "./calls-indicators-interval-report-routing.module";
import { CallsIndicatorsByIntervalReportComponent } from "./calls-indicators-interval-report.component";
import { CallsIndicatorsByIntervalReportListComponent } from "./calls-indicators-interval-report-list/calls-indicators-interval-report-list.component";

import { CallsIndicatorsByIntervalReportGraphComponent } from "./calls-indicators-interval-report-graph/calls-indicators-interval-report-graph.component";

import { ExcelService } from 'sections/reports/src/shared/services';


@NgModule({
  declarations: [
    CallsIndicatorsByIntervalReportComponent,
    CallsIndicatorsByIntervalReportListComponent,
    CallsIndicatorsByIntervalReportGraphComponent
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
    ReportHeaderModule,
    ReportFinderModule,

    CallsIndicatorsByIntervalReportRoutingModule
  ],
  providers: [ExcelService, { provide: LOCALE_ID, useValue: "es" }]
})
export class CallsIndicatorsByIntervalReportModule {}