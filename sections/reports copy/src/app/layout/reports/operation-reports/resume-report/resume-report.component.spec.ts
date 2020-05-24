import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReportComponent } from './resume-report.component';

describe('ResumeReportComponent', () => {
  let component: ResumeReportComponent;
  let fixture: ComponentFixture<ResumeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
