import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOutboundHistoricComponent } from './dashboard-outbound-historic.component';

describe('DashboardOutboundHistoricComponent', () => {
  let component: DashboardOutboundHistoricComponent;
  let fixture: ComponentFixture<DashboardOutboundHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOutboundHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOutboundHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
