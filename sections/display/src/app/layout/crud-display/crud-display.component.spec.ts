import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisplayComponent } from './crud-display.component';

describe('CrudDisplayComponent', () => {
  let component: CrudDisplayComponent;
  let fixture: ComponentFixture<CrudDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
