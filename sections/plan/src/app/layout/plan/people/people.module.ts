import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { AssignationComponent } from './assignation/assignation.component';
import { RolesComponent } from './roles/roles.component';
import { TeamsComponent } from './teams/teams.component';
import { PbxagentsComponent } from './pbxagents/pbxagents.component';


@NgModule({
  declarations: [PeopleComponent, AssignationComponent, RolesComponent, TeamsComponent, PbxagentsComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
