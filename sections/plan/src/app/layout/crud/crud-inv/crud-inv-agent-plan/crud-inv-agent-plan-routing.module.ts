import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudInvAgentPlanComponent } from './crud-inv-agent-plan.component';

const routes: Routes = [
  {
      path: '', component: CrudInvAgentPlanComponent,
      children: [
        { path: '', redirectTo: 'menu' },
        { path: 'menu', component: CrudInvAgentPlanComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudInvAgentPlanRoutingModule { }
