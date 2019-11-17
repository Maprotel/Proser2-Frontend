import { DisplayMonitorIndicatorsComponent } from "./display-monitor-indicators/display-monitor-indicators.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DisplayMonitorComponent } from "./display-monitor.component";
import { DisplayMonitorCallsComponent } from "./display-monitor-calls/display-monitor-calls.component";

const routes: Routes = [
  {
    path: "",
    component: DisplayMonitorComponent,
    children: [
      { path: "calls", component: DisplayMonitorCallsComponent },

      { path: "indicators", component: DisplayMonitorIndicatorsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayMonitorRoutingModule {}

/*
const routes: Routes = [
  {
    path: "",
    component: DashboardOutboundComponent,
    children: [
      { path: "list", component: DashboardOutboundListComponent },
      // { path: "groups", component: DashboardOutboundGroupsComponent },
      { path: "realtime", component: DashboardOutboundRealtimeComponent },
      { path: "historic", component: DashboardOutboundHistoricComponent }
    ]
  }
];

*/
