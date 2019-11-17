

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// local
import { DashboardHeaderRoutingModule } from './dashboard-header-routing.module';
import { DashboardHeaderComponent } from './dashboard-header.component';
import { DashboardHeaderMenuComponent } from './dashboard-header-menu/dashboard-header-menu.component';


// shared modules
import { HeaderMenuUserModule } from "shared/modules/header-menu-user/header-menu-user.module";
import { HeaderMenuBrandModule } from "shared/modules/header-menu-brand/header-menu-brand.module";


// Bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";

// node modules
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardHeaderMenuComponent,
  ],
  imports: [
    CommonModule,
    HeaderMenuBrandModule,
    DashboardHeaderRoutingModule,
    NgbModule,
    HttpClientModule,

    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),

    FontAwesomeModule,

    DashboardHeaderRoutingModule,
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardHeaderMenuComponent
  ]
})
export class DashboardHeaderModule { }
