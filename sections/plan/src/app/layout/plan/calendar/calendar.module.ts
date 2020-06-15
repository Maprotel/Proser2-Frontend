import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FixedhollydayComponent } from './fixedhollyday/fixedhollyday.component';
import { VariablehollydayComponent } from './variablehollyday/variablehollyday.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';


@NgModule({
  declarations: [CalendarComponent, FixedhollydayComponent, VariablehollydayComponent, CalendarListComponent, CalendarDetailComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
