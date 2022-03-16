import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestVcnRegisterComponent } from './guest-vcn-register.component';

describe('GuestVcnRegisterComponent', () => {
  let component: GuestVcnRegisterComponent;
  let fixture: ComponentFixture<GuestVcnRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestVcnRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestVcnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
