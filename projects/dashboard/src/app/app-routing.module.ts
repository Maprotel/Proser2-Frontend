import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "shared/guards";
import { RedirectModule } from "shared/modules/redirect/redirect.module";

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RedirectModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*
const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },

  {
    path: "dashboard",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      }
    ]
  }
];

*/
