import { DashboardInboundHistoricComponent } from "./dashboard-inbound-historic/dashboard-inbound-historic.component";
import { DashboardInboundRealtimeComponent } from "./dashboard-inbound-realtime/dashboard-inbound-realtime.component";
import { DashboardInboundListComponent } from "./dashboard-inbound-list/dashboard-inbound-list.component";
import { DashboardInboundGroupsComponent } from "./dashboard-inbound-groups/dashboard-inbound-groups.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardInboundComponent } from "./dashboard-inbound.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardInboundComponent,
    children: [
      { path: "list", component: DashboardInboundListComponent },
      { path: "groups", component: DashboardInboundGroupsComponent },
      { path: "realtime", component: DashboardInboundRealtimeComponent },
      { path: "historic", component: DashboardInboundHistoricComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInboundRoutingModule {}
