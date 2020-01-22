import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorCallsComponent } from './display-monitor-calls.component';

describe('DisplayMonitorCallsComponent', () => {
  let component: DisplayMonitorCallsComponent;
  let fixture: ComponentFixture<DisplayMonitorCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
