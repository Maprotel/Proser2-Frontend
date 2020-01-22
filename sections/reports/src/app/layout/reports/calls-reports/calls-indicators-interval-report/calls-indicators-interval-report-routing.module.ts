import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsIndicatorsByIntervalReportComponent } from './calls-indicators-interval-report.component';




const routes: Routes = [
  {
    path: "",
    component: CallsIndicatorsByIntervalReportComponent,
    children: [
      // { path: "", redirectTo: "list" },
      // { path: "list", component: AuditReportListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsIndicatorsByIntervalReportRoutingModule { }
