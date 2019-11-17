import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// local compoenents
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardHeaderModule } from './dashboard-header/dashboard-header.module';

// shared modules
import { IntroPageModule } from "shared/modules/intro-page/intro-page.module";


// node modules
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthGuard } from "shared/guards";
import { AlertService } from "shared/services/helpers/alert.service";
import { AlertModule } from "shared/modules/alert/alert.module";

// Shared
import { EnvServiceProvider } from "shared/services/helpers/env.service.provider";


// Bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";

@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IntroPageModule,
    FontAwesomeModule,
    NgbModule,

    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),

    DashboardHeaderModule,

    AppRoutingModule
  ],
  providers: [EnvServiceProvider, AuthGuard, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule { }
