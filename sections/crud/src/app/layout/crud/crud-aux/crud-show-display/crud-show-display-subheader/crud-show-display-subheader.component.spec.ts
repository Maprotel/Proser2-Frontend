import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudShowDisplaySubheaderComponent } from './crud-show-display-subheader.component';

describe('CrudShowDisplaySubheaderComponent', () => {
  let component: CrudShowDisplaySubheaderComponent;
  let fixture: ComponentFixture<CrudShowDisplaySubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudShowDisplaySubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudShowDisplaySubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
