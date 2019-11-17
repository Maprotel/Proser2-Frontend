import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInboundRealtimeComponent } from './dashboard-inbound-realtime.component';

describe('DashboardInboundRealtimeComponent', () => {
  let component: DashboardInboundRealtimeComponent;
  let fixture: ComponentFixture<DashboardInboundRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInboundRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInboundRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
