import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';

import { HeaderComponent } from './header.component';

import { HeaderMenuUserComponent } from './header-menu-user/header-menu-user.component';
import { HeaderMenuCommandsComponent } from './header-menu-commands/header-menu-commands.component';


import { HttpClientModule } from "@angular/common/http";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


import { HeaderMenuUserModule } from "shared/modules/header-menu-user/header-menu-user.module";
import { HeaderMenuBrandModule } from "shared/modules/header-menu-brand/header-menu-brand.module";

@NgModule({
  declarations: [HeaderComponent, HeaderMenuCommandsComponent,
    HeaderMenuUserComponent],
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
  exports: [HeaderComponent, HeaderMenuCommandsComponent,
    HeaderMenuUserComponent]
})
export class HeaderModule { }
