import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudDisplayComponent } from "./crud-display.component";
import { CrudDisplayListComponent } from "./crud-display-list/crud-display-list.component";
import { CrudDisplayDetailComponent } from './crud-display-detail/crud-display-detail.component';


const routes: Routes = [
  {
    path: "",
    component: CrudDisplayComponent,
    children: [
      { path: "", redirectTo: "crud-display-list" },
      {
        path: "crud-display-list",
        component: CrudDisplayListComponent
      },
      {
        path: "crud-display-detail",
        component: CrudDisplayDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudDisplayRoutingModule { }
