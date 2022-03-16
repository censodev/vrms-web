import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPatientProfileCreateComponent } from './guest-patient-profile-create.component';

describe('GuestPatientProfileCreateComponent', () => {
  let component: GuestPatientProfileCreateComponent;
  let fixture: ComponentFixture<GuestPatientProfileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPatientProfileCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPatientProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
