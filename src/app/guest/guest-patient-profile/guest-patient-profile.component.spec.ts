import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPatientProfileComponent } from './guest-patient-profile.component';

describe('GuestPatientProfileComponent', () => {
  let component: GuestPatientProfileComponent;
  let fixture: ComponentFixture<GuestPatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPatientProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
