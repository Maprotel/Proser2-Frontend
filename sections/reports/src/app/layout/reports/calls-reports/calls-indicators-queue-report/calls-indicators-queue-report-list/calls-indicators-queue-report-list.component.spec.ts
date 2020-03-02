import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIndicatorsByQueueReportListComponent } from './calls-indicators-queue-report-list.component';

describe('CallsIndicatorsByQueueReportListComponent', () => {
  let component: CallsIndicatorsByQueueReportListComponent;
  let fixture: ComponentFixture<CallsIndicatorsByQueueReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsIndicatorsByQueueReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIndicatorsByQueueReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
