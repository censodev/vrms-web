import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNavbarMobileComponent } from './guest-navbar-mobile.component';

describe('GuestNavbarMobileComponent', () => {
  let component: GuestNavbarMobileComponent;
  let fixture: ComponentFixture<GuestNavbarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestNavbarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestNavbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
