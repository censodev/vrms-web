import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnScreeningTmplComponent } from './vcn-screening-tmpl.component';

describe('VcnScreeningTmplComponent', () => {
  let component: VcnScreeningTmplComponent;
  let fixture: ComponentFixture<VcnScreeningTmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnScreeningTmplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnScreeningTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
