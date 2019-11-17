import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeaderMenuComponent } from './dashboard-header-menu.component';

describe('DashboardHeaderMenuComponent', () => {
  let component: DashboardHeaderMenuComponent;
  let fixture: ComponentFixture<DashboardHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
