import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInvAgentPlanComponent } from './crud-inv-agent-plan.component';

describe('CrudInvAgentPlanComponent', () => {
  let component: CrudInvAgentPlanComponent;
  let fixture: ComponentFixture<CrudInvAgentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInvAgentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInvAgentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
