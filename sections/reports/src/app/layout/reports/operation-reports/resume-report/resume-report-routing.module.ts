import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeReportComponent } from './resume-report.component';


const routes: Routes = [
  {
    path: "",
    component: ResumeReportComponent,
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
export class ResumeReportRoutingModule { }
