import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInboundRoutingModule } from './dashboard-inbound-routing.module';
import { DashboardInboundComponent } from './dashboard-inbound.component';
import { DashboardInboundRealtimeComponent } from './dashboard-inbound-realtime/dashboard-inbound-realtime.component';
import { DashboardInboundHistoricComponent } from './dashboard-inbound-historic/dashboard-inbound-historic.component';


@NgModule({
  declarations: [DashboardInboundComponent, DashboardInboundRealtimeComponent, DashboardInboundHistoricComponent],
  imports: [
    CommonModule,
    DashboardInboundRoutingModule
  ]
})
export class DashboardInboundModule { }
