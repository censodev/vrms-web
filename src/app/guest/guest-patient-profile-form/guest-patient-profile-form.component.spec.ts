import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPatientProfileFormComponent } from './guest-patient-profile-form.component';

describe('GuestPatientProfileFormComponent', () => {
  let component: GuestPatientProfileFormComponent;
  let fixture: ComponentFixture<GuestPatientProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPatientProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPatientProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
