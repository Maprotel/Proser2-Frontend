import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "layout",
        component: LayoutComponent
      },
      {
        path: "view-inbound",
        loadChildren: () =>
          import("./view/display-inbound/display-inbound.module").then(
            m => m.DisplayInboundModule
          )
      },
      {
        path: "view-outbound",
        loadChildren: () =>
          import("./view/display-outbound/display-outbound.module").then(
            m => m.DisplayOutboundModule
          )
      },
      {
        path: "view-automatic",
        loadChildren: () =>
          import("./view/display-automatic/display-automatic.module").then(
            m => m.DisplayAutomaticModule
          )
      },
      {
        path: "view-monitor",
        loadChildren: () =>
          import("./view/display-monitor/display-monitor.module").then(
            m => m.DisplayMonitorModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
