import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIndicatorsByQueueReportComponent } from './calls-indicators-queue-report.component';

describe('CallsIndicatorsByQueueReportComponent', () => {
  let component: CallsIndicatorsByQueueReportComponent;
  let fixture: ComponentFixture<CallsIndicatorsByQueueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsIndicatorsByQueueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIndicatorsByQueueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
