import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorAgentsComponent } from './display-monitor-agents.component';

describe('DisplayMonitorAgentsComponent', () => {
  let component: DisplayMonitorAgentsComponent;
  let fixture: ComponentFixture<DisplayMonitorAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
