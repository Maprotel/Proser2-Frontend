import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOutboundRealtimeComponent } from './dashboard-outbound-realtime.component';

describe('DashboardOutboundRealtimeComponent', () => {
  let component: DashboardOutboundRealtimeComponent;
  let fixture: ComponentFixture<DashboardOutboundRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOutboundRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOutboundRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
