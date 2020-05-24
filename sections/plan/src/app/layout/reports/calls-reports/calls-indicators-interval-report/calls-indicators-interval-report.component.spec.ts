import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIndicatorsByIntervalReportComponent } from './calls-indicators-interval-report.component';

describe('CallsIndicatorsByIntervalReportComponent', () => {
  let component: CallsIndicatorsByIntervalReportComponent;
  let fixture: ComponentFixture<CallsIndicatorsByIntervalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsIndicatorsByIntervalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIndicatorsByIntervalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});