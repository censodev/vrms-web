import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcPaymentComponent } from './vcn-prc-payment.component';

describe('VcnPrcPaymentComponent', () => {
  let component: VcnPrcPaymentComponent;
  let fixture: ComponentFixture<VcnPrcPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
