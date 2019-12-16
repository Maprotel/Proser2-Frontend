import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorIndicatorsHistoricComponent } from './display-monitor-indicators-historic.component';

describe('DisplayMonitorIndicatorsHistoricComponent', () => {
  let component: DisplayMonitorIndicatorsHistoricComponent;
  let fixture: ComponentFixture<DisplayMonitorIndicatorsHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorIndicatorsHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorIndicatorsHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
