
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DisplayMonitorComponent } from "./display-monitor.component";

import { DisplayMonitorIndicatorsComponent } from "./display-monitor-indicators/display-monitor-indicators.component";

import { DisplayMonitorIndicatorsHistoricComponent } from "./display-monitor-indicators-historic/display-monitor-indicators-historic.component";

import { DisplayMonitorIndicatorsSummaryComponent } from './display-monitor-indicators-summary/display-monitor-indicators-summary.component';

const routes: Routes = [
  {
    path: "",
    component: DisplayMonitorComponent,
    children: [

      { path: "indicators", component: DisplayMonitorIndicatorsComponent },
      { path: "indicators-historic", component: DisplayMonitorIndicatorsHistoricComponent },
      { path: "indicators-summary", component: DisplayMonitorIndicatorsSummaryComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayMonitorRoutingModule { }
