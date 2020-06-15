import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftComponent } from './shift.component';
import { DaysComponent } from './days/days.component';


@NgModule({
  declarations: [ShiftComponent, DaysComponent],
  imports: [
    CommonModule,
    ShiftRoutingModule
  ]
})
export class ShiftModule { }
