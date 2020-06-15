import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbxagentsComponent } from './pbxagents.component';

describe('PbxagentsComponent', () => {
  let component: PbxagentsComponent;
  let fixture: ComponentFixture<PbxagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbxagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbxagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
