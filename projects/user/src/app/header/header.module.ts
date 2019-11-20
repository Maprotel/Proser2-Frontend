import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


import { HeaderMenuUserComponent } from './header-menu-user/header-menu-user.component';
import { HeaderMenuLoginComponent } from './header-menu-login/header-menu-login.component';

import { HeaderMenuUserModule } from "shared/modules/header-menu-user/header-menu-user.module";
import { HeaderMenuBrandModule } from "shared/modules/header-menu-brand/header-menu-brand.module";
import { HeaderMenuLoginComponent } from './header-menu-login/header-menu-login.component';
@NgModule({
  declarations: [HeaderComponent,
    HeaderMenuLoginComponent,
    HeaderMenuUserComponent, HeaderMenuLoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,


    HeaderMenuUserModule,
    HeaderMenuBrandModule,

    HeaderRoutingModule
  ],
  exports: [HeaderComponent,
    HeaderMenuLoginComponent,
    HeaderMenuUserComponent,],
})
export class HeaderModule { }
