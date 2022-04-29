import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcPaymentFormComponent } from './vcn-prc-payment-form.component';

describe('VcnPrcPaymentFormComponent', () => {
  let component: VcnPrcPaymentFormComponent;
  let fixture: ComponentFixture<VcnPrcPaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcPaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
