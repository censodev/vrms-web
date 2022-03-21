import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPackageComponent } from './vcn-package.component';

describe('VcnPackageComponent', () => {
  let component: VcnPackageComponent;
  let fixture: ComponentFixture<VcnPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
