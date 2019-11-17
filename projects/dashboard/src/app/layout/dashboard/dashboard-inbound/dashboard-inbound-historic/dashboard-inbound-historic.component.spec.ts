import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInboundHistoricComponent } from './dashboard-inbound-historic.component';

describe('DashboardInboundHistoricComponent', () => {
  let component: DashboardInboundHistoricComponent;
  let fixture: ComponentFixture<DashboardInboundHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInboundHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInboundHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
