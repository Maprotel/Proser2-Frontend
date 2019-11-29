import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorIndicatorsSummaryComponent } from './display-monitor-indicators-summary.component';

describe('DisplayMonitorIndicatorsSummaryComponent', () => {
  let component: DisplayMonitorIndicatorsSummaryComponent;
  let fixture: ComponentFixture<DisplayMonitorIndicatorsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorIndicatorsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorIndicatorsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
