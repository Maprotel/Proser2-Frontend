import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHistoricHeaderComponent } from './dashboard-historic-header.component';

describe('DashboardHistoricHeaderComponent', () => {
  let component: DashboardHistoricHeaderComponent;
  let fixture: ComponentFixture<DashboardHistoricHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHistoricHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHistoricHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
