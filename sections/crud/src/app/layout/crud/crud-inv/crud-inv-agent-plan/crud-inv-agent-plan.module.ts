import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NgSelectModule } from "@ng-select/ng-select";
import { AlertModule } from "shared/modules/alert/alert.module";

import { CrudInvAgentPlanRoutingModule } from "./crud-inv-agent-plan-routing.module";
import { CrudInvAgentPlanComponent } from "./crud-inv-agent-plan.component";
import { CrudInvAgentPlanDetailComponent } from "./crud-inv-agent-plan-detail/crud-inv-agent-plan-detail.component";
import { CrudInvAgentPlanListComponent } from "./crud-inv-agent-plan-list/crud-inv-agent-plan-list.component";
import { FormatPipesModule } from "sections/crud/src/shared/modules/";

@NgModule({
  declarations: [
    CrudInvAgentPlanComponent,
    CrudInvAgentPlanDetailComponent,
    CrudInvAgentPlanListComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    NgbModule,
    CommonModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,

    FormatPipesModule,

    CrudInvAgentPlanRoutingModule
  ]
})
export class CrudInvAgentPlanModule { }
