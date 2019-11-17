import { DashboardHeaderModule } from '../dashboard-header/dashboard-header.module'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardHeaderModule,
  ]
})
export class LayoutModule { }
