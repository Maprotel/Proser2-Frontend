import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablehollydayComponent } from './variablehollyday.component';

describe('VariablehollydayComponent', () => {
  let component: VariablehollydayComponent;
  let fixture: ComponentFixture<VariablehollydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablehollydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablehollydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
