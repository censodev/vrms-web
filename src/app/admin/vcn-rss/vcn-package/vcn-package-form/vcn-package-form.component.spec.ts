import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPackageFormComponent } from './vcn-package-form.component';

describe('VcnPackageFormComponent', () => {
  let component: VcnPackageFormComponent;
  let fixture: ComponentFixture<VcnPackageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPackageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
