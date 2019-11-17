import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from "ngx-bootstrap/collapse";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AuthGuard } from "shared/guards";
import { AlertService } from "shared/services/helpers/alert.service";
import { AlertModule } from "shared/modules/";

import { EnvServiceProvider } from "shared/services/helpers/env.service.provider";

import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { HeaderMenuBrandModule } from "shared/modules/"
import { HeaderMenuUserModule } from "shared/modules/";

import { NowModule } from "shared/modules/now/now.module";
import { ConnectionModule } from "shared/modules/connection/connection.module";
import { IntroPageModule } from "shared/modules/intro-page/intro-page.module";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ByeComponent } from './pages/bye/bye.component';
import { HeaderMenuLoginComponent } from './header/header-menu-login/header-menu-login.component';
import { HeaderMenuSectionsComponent } from './header/header-menu-sections/header-menu-sections.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ByeComponent,
    HeaderMenuLoginComponent,
    HeaderMenuSectionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HeaderMenuBrandModule,
    HeaderMenuUserModule,
    ConnectionModule,
    NowModule,
    IntroPageModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
    EnvServiceProvider,
    AuthGuard,
    AlertService,
    {
      provide: "externalUrlRedirectResolver",
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
