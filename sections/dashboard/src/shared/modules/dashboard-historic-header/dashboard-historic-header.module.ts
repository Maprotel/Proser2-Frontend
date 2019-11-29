import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectorModule } from "shared/modules/selector/selector.module";

import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

import { DashboardHistoricHeaderComponent } from './dashboard-historic-header.component';

@NgModule({
  declarations: [DashboardHistoricHeaderComponent],
  imports: [CommonModule, FormsModule, NgSelectModule, SelectorModule],
  exports: [DashboardHistoricHeaderComponent]
})
export class DashboardHistoricHeaderModule { }
