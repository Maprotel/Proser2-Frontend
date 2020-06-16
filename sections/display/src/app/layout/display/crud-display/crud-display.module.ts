import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";

//import { CrudModule } from 'src/app/layout/crud/crud.module';
import { AlertModule } from "shared/modules/alert/alert.module";

import { CrudDisplayRoutingModule } from './crud-display-routing.module';
import { CrudDisplayComponent } from './crud-display.component';
import { CrudDisplayListComponent } from './crud-display-list/crud-display-list.component';
import { CrudDisplayDetailComponent } from './crud-display-detail/crud-display-detail.component';


@NgModule({
  declarations: [CrudDisplayComponent, CrudDisplayListComponent, CrudDisplayDetailComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CrudDisplayRoutingModule
  ]
})
export class CrudDisplayModule { }
