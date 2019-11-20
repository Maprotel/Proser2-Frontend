import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HeaderMenuUserModule } from "shared/modules/header-menu-user/header-menu-user.module";
import { HeaderMenuBrandModule } from "shared/modules/header-menu-brand/header-menu-brand.module";

import { HeaderComponent } from './header.component';
import { HeaderMenuGeneralComponent } from './header-menu-general/header-menu-general.component';
import { HeaderMenuPeopleComponent } from './header-menu-people/header-menu-people.component';
import { HeaderMenuOperationComponent } from './header-menu-operation/header-menu-operation.component';
import { HeaderMenuPlanningComponent } from './header-menu-planning/header-menu-planning.component';

import { HeaderMenuLoginComponent } from './header-menu-login/header-menu-login.component';
@NgModule({
  declarations: [HeaderComponent, HeaderMenuGeneralComponent, HeaderMenuPeopleComponent, HeaderMenuOperationComponent, HeaderMenuPlanningComponent, HeaderMenuLoginComponent],
  imports: [
    CommonModule,

    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,

    HeaderMenuUserModule,
    HeaderMenuBrandModule,

    HeaderRoutingModule,
  ],
  exports: [HeaderComponent, HeaderMenuGeneralComponent, HeaderMenuPeopleComponent, HeaderMenuOperationComponent, HeaderMenuPlanningComponent]
})
export class HeaderModule { }
