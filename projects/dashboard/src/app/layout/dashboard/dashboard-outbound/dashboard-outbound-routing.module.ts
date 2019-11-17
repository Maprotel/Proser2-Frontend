import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardOutboundComponent } from "./dashboard-outbound.component";
import { DashboardOutboundListComponent } from './dashboard-outbound-list/dashboard-outbound-list.component';
import { DashboardOutboundRealtimeComponent } from './dashboard-outbound-realtime/dashboard-outbound-realtime.component';
import { DashboardOutboundHistoricComponent } from './dashboard-outbound-historic/dashboard-outbound-historic.component';

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
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOutboundRoutingModule {}
