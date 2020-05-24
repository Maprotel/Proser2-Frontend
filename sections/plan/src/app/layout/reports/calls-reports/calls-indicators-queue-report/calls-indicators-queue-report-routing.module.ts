import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsIndicatorsByQueueReportComponent } from './calls-indicators-queue-report.component';


const routes: Routes = [
  {
    path: "",
    component: CallsIndicatorsByQueueReportComponent,
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
export class CallsIndicatorsByQueueReportRoutingModule { }
