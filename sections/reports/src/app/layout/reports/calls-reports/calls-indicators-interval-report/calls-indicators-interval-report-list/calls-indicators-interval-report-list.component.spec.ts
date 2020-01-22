import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIndicatorsByIntervalReportListComponent } from './calls-indicators-interval-report-list.component';

describe('CallsIndicatorsByIntervalReportListComponent', () => {
  let component: CallsIndicatorsByIntervalReportListComponent;
  let fixture: ComponentFixture<CallsIndicatorsByIntervalReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsIndicatorsByIntervalReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIndicatorsByIntervalReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
