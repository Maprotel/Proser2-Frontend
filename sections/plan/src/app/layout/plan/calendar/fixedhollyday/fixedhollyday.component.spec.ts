import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedhollydayComponent } from './fixedhollyday.component';

describe('FixedhollydayComponent', () => {
  let component: FixedhollydayComponent;
  let fixture: ComponentFixture<FixedhollydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedhollydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedhollydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
