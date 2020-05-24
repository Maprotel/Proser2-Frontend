import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReportListComponent } from './resume-report-list.component';

describe('ResumeReportListComponent', () => {
  let component: ResumeReportListComponent;
  let fixture: ComponentFixture<ResumeReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
