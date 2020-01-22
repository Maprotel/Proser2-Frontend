import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIndicatorsByIntervalReportGraphComponent } from './calls-indicators-interval-report-graph.component';

describe('CallsIndicatorsByIntervalReportGraphComponent', () => {
  let component: CallsIndicatorsByIntervalReportGraphComponent;
  let fixture: ComponentFixture<CallsIndicatorsByIntervalReportGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsIndicatorsByIntervalReportGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIndicatorsByIntervalReportGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
