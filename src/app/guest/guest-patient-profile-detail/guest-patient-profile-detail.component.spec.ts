import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPatientProfileDetailComponent } from './guest-patient-profile-detail.component';

describe('GuestPatientProfileDetailComponent', () => {
  let component: GuestPatientProfileDetailComponent;
  let fixture: ComponentFixture<GuestPatientProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPatientProfileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPatientProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
