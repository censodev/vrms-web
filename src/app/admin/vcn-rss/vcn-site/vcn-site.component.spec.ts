import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnSiteComponent } from './vcn-site.component';

describe('VcnSiteComponent', () => {
  let component: VcnSiteComponent;
  let fixture: ComponentFixture<VcnSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
