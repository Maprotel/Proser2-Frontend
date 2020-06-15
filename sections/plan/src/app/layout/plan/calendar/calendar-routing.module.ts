import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from "./calendar.component";
import { CalendarListComponent } from "./calendar-list/calendar-list.component";
import { CalendarDetailComponent } from "./calendar-detail/calendar-detail.component";


const routes: Routes = [
  {
      path: "",
      component: CalendarComponent,
      children: [
          {
              path: "calendar-list",
              component: CalendarListComponent,
          },
          {
              path: "calendar-detail",
              component: CalendarDetailComponent,
          },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
