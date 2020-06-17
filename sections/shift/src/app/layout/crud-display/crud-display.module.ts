import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Vendor
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { CrudDisplayRoutingModule } from './crud-display-routing.module';
import { CrudDisplayComponent } from './crud-display.component';
import { CrudDisplayListComponent } from './crud-display-list/crud-display-list.component';
import { CrudDisplayDetailComponent } from './crud-display-detail/crud-display-detail.component';

// Pipe
import { Ng2SearchPipe } from "ng2-search-filter";

@NgModule({
  declarations: [
    CrudDisplayComponent,
    CrudDisplayListComponent,
    CrudDisplayDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    CrudDisplayRoutingModule
  ],
  providers: [Ng2SearchPipe]
})
export class CrudDisplayModule {}
