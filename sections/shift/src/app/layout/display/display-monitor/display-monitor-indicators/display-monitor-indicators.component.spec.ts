import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonitorIndicatorsComponent } from './display-monitor-indicators.component';

describe('DisplayMonitorIndicatorsComponent', () => {
  let component: DisplayMonitorIndicatorsComponent;
  let fixture: ComponentFixture<DisplayMonitorIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonitorIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonitorIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
