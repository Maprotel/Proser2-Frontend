import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInvAgentPlanDetailComponent } from './crud-inv-agent-plan-detail.component';

describe('CrudInvAgentPlanDetailComponent', () => {
  let component: CrudInvAgentPlanDetailComponent;
  let fixture: ComponentFixture<CrudInvAgentPlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInvAgentPlanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInvAgentPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
