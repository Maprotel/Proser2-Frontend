import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorComponent } from './display-monitor.component';

describe('DisplayMonitorComponent', () => {
  let component: DisplayMonitorComponent;
  let fixture: ComponentFixture<DisplayMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
