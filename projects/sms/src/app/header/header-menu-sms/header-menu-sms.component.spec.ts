import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuSmsComponent } from './header-menu-sms.component';

describe('HeaderMenuSmsComponent', () => {
  let component: HeaderMenuSmsComponent;
  let fixture: ComponentFixture<HeaderMenuSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
