import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInvAgentPlanListComponent } from './crud-inv-agent-plan-list.component';

describe('CrudInvAgentPlanListComponent', () => {
  let component: CrudInvAgentPlanListComponent;
  let fixture: ComponentFixture<CrudInvAgentPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInvAgentPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInvAgentPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
