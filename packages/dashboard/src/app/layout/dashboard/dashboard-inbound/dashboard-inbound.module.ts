// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// Locale
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs, "es");
import { LOCALE_ID } from "@angular/core";


// Vendor
import * as Chart from "chart.js";
import * as ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


// Custom modules
import { AlertModule } from "shared/modules/alert/alert.module";

import { SelectorModule } from "shared/modules/selector/selector.module";

import { DashboardHistoricHeaderModule } from 'packages/dashboard/src/shared/modules/dashboard-historic-header/dashboard-historic-header.module';

import { DashboardHeaderModule } from "packages/dashboard/src/shared/modules/dashboard-header/dashboard-header.module";

import { DashboardInboundRoutingModule } from "./dashboard-inbound-routing.module";

import { SharedPipesModule } from "shared/pipes/shared-pipes.module";



// Components main
import { DashboardInboundComponent } from "./dashboard-inbound.component";

import { DashboardInboundRealtimeComponent } from './dashboard-inbound-realtime/dashboard-inbound-realtime.component';

import { DashboardInboundHistoricComponent } from './dashboard-inbound-historic/dashboard-inbound-historic.component';



// Components common
import { DashboardInboundCallsComponent } from "./dashboard-inbound-common/dashboard-inbound-calls/dashboard-inbound-calls.component";

import { DashboardInboundLevelsComponent } from "./dashboard-inbound-common/dashboard-inbound-levels/dashboard-inbound-levels.component";

// Components historic
import { DashboardInboundAgentsHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-agents-historic/dashboard-inbound-agents-historic.component";

import { DashboardInboundBreaksHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-breaks-historic/dashboard-inbound-breaks-historic.component";

import { DashboardInboundBreaksAuxiliarHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-breaks-historic/dashboard-inbound-breaks-auxiliar-historic/dashboard-inbound-breaks-auxiliar-historic.component";

import { DashboardInboundBreaksAssignationsHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-breaks-historic/dashboard-inbound-breaks-assignations-historic/dashboard-inbound-breaks-assignations-historic.component";

import { DashboardInboundHighlightsHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-highlights-historic/dashboard-inbound-highlights-historic.component";


// Component realtime
import { DashboardInboundAgentsComponent } from "./dashboard-inbound-realtime/dashboard-inbound-agents/dashboard-inbound-agents.component";

import { DashboardInboundAgentsPieComponent } from "./dashboard-inbound-realtime/dashboard-inbound-agents/dashboard-inbound-agents-pie/dashboard-inbound-agents-pie.component";

import { DashboardInboundAgentsDistributionComponent } from "./dashboard-inbound-realtime/dashboard-inbound-agents/dashboard-inbound-agents-distribution/dashboard-inbound-agents-distribution.component";

import { DashboardInboundBreaksComponent } from "./dashboard-inbound-realtime/dashboard-inbound-breaks/dashboard-inbound-breaks.component";

import { DashboardInboundBreaksAuxiliarComponent } from "./dashboard-inbound-realtime/dashboard-inbound-breaks/dashboard-inbound-breaks-auxiliar/dashboard-inbound-breaks-auxiliar.component";

import { DashboardInboundBreaksAssignationsComponent } from "./dashboard-inbound-realtime/dashboard-inbound-breaks/dashboard-inbound-breaks-assignations/dashboard-inbound-breaks-assignations.component";

import { DashboardInboundHighlightsComponent } from "./dashboard-inbound-realtime/dashboard-inbound-highlights/dashboard-inbound-highlights.component";



// Components modals
import { DashboardInboundModalAgentsComponent } from "./dashboard-inbound-modals/dashboard-inbound-modal-agents/dashboard-inbound-modal-agents.component";

import { DashboardInboundModalAgentsHistoricComponent } from './dashboard-inbound-modals/dashboard-inbound-modal-agents-historic/dashboard-inbound-modal-agents-historic.component';

import { DashboardInboundModalBreaksComponent } from './dashboard-inbound-modals/dashboard-inbound-modal-breaks/dashboard-inbound-modal-breaks.component';

import { DashboardInboundModalBreaksHistoricComponent } from './dashboard-inbound-modals/dashboard-inbound-modal-breaks-historic/dashboard-inbound-modal-breaks-historic.component';

import { DashboardInboundModalCallsComponent } from "./dashboard-inbound-modals/dashboard-inbound-modal-calls/dashboard-inbound-modal-calls.component";

import { DashboardInboundModalCurrentcallsComponent } from './dashboard-inbound-modals/dashboard-inbound-modal-currentcalls/dashboard-inbound-modal-currentcalls.component';

import { DashboardInboundModalTextComponent } from "./dashboard-inbound-modals/dashboard-inbound-modal-text/dashboard-inbound-modal-text.component";


@NgModule({
  declarations: [
    DashboardInboundComponent,

    DashboardInboundCallsComponent,
    DashboardInboundLevelsComponent,
    DashboardInboundBreaksComponent,
    DashboardInboundBreaksAuxiliarComponent,
    DashboardInboundBreaksAssignationsComponent,
    DashboardInboundHighlightsComponent,
    DashboardInboundAgentsComponent,
    DashboardInboundAgentsPieComponent,
    DashboardInboundAgentsDistributionComponent,
    DashboardInboundHighlightsHistoricComponent,
    DashboardInboundBreaksHistoricComponent,
    DashboardInboundBreaksAuxiliarHistoricComponent,
    DashboardInboundBreaksAssignationsHistoricComponent,
    DashboardInboundAgentsHistoricComponent,
    DashboardInboundModalAgentsComponent,
    DashboardInboundModalCallsComponent,
    DashboardInboundModalTextComponent,
    DashboardInboundModalCurrentcallsComponent,
    DashboardInboundModalBreaksComponent,



    DashboardInboundModalAgentsHistoricComponent,
    DashboardInboundModalBreaksHistoricComponent,
    DashboardInboundRealtimeComponent,
    DashboardInboundHistoricComponent
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
    DashboardHeaderModule,

    FontAwesomeModule,

    DashboardHistoricHeaderModule,

    DashboardInboundRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es" }]
})
export class DashboardInboundModule { }
