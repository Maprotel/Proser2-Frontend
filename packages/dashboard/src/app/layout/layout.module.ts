// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Custom modules
import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderModule } from './../header/header.module';

// Components
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    LayoutRoutingModule]
})
export class LayoutModule { }
