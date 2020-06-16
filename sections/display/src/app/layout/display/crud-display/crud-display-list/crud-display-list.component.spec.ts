import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisplayListComponent } from './crud-display-list.component';

describe('CrudDisplayListComponent', () => {
  let component: CrudDisplayListComponent;
  let fixture: ComponentFixture<CrudDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
