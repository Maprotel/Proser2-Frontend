import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOutboundModalPlanAgentsComponent } from './dashboard-outbound-modal-plan-agents.component';

describe('DashboardOutboundModalPlanAgentsComponent', () => {
  let component: DashboardOutboundModalPlanAgentsComponent;
  let fixture: ComponentFixture<DashboardOutboundModalPlanAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOutboundModalPlanAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOutboundModalPlanAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
