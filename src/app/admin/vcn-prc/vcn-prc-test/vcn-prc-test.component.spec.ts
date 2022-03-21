import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcTestComponent } from './vcn-prc-test.component';

describe('VcnPrcTestComponent', () => {
  let component: VcnPrcTestComponent;
  let fixture: ComponentFixture<VcnPrcTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
