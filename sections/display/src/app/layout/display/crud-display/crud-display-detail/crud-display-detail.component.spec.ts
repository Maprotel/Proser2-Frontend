import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisplayDetailComponent } from './crud-display-detail.component';

describe('CrudDisplayDetailComponent', () => {
  let component: CrudDisplayDetailComponent;
  let fixture: ComponentFixture<CrudDisplayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDisplayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisplayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
