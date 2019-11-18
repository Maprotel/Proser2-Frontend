import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ByeComponent } from './pages/bye/bye.component';

import { host } from 'shared/services/helpers/env.service'

// const host = "http://127.0.0.1:4200";
const service = `${host}/proser_reports/dist/display/home`

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'bye', component: ByeComponent },
  { path: 'logout', component: ByeComponent },

  // {
  //   path: 'display',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: `${host}/proser_reports/dist/display`
  //   }
  // },

  // {
  //   path: 'dashboard',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/dashboard'
  //   }
  // },


  // {
  //   path: 'crud',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/crud'
  //   }
  // },


  // {
  //   path: 'audit',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/audit'
  //   }
  // },


  // {
  //   path: 'system',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/system'
  //   }
  // },


  // {
  //   path: 'view',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/view'
  //   }
  // },


  // {
  //   path: 'user',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/user'
  //   }
  // },


  // {
  //   path: 'configuracion',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/configuration'
  //   }
  // },

  // {
  //   path: 'reports',
  //   component: ByeComponent,
  //   resolve: {
  //     url: 'externalUrlRedirectResolver'
  //   },
  //   data: {
  //     externalUrl: host + '/proser_reports/dist/reports'
  //   }
  // },

  // NAVIGATE TO NOT FOUND PAGE
  { path: "**", redirectTo: "not-found" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
