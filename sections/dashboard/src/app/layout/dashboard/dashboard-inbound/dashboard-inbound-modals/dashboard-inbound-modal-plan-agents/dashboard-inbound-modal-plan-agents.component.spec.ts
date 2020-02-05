import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInboundModalPlanAgentsComponent } from './dashboard-inbound-modal-plan-agents.component';

describe('DashboardInboundModalPlanAgentsComponent', () => {
  let component: DashboardInboundModalPlanAgentsComponent;
  let fixture: ComponentFixture<DashboardInboundModalPlanAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInboundModalPlanAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInboundModalPlanAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
