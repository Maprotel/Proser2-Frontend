import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardOutboundRoutingModule } from './dashboard-outbound-routing.module';
import { DashboardOutboundComponent } from './dashboard-outbound.component';
import { DashboardOutboundRealtimeComponent } from './dashboard-outbound-realtime/dashboard-outbound-realtime.component';
import { DashboardOutboundHistoricComponent } from './dashboard-outbound-historic/dashboard-outbound-historic.component';


@NgModule({
  declarations: [DashboardOutboundComponent, DashboardOutboundRealtimeComponent, DashboardOutboundHistoricComponent],
  imports: [
    CommonModule,
    DashboardOutboundRoutingModule
  ]
})
export class DashboardOutboundModule { }
