import { DashboardInboundHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-historic.component";
import { DashboardInboundRealtimeComponent } from "./dashboard-inbound-realtime/dashboard-inbound-realtime.component";


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardInboundComponent } from "./dashboard-inbound.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardInboundComponent,
    children: [
      { path: "realtime", component: DashboardInboundRealtimeComponent },
      { path: "historic", component: DashboardInboundHistoricComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInboundRoutingModule { }
