import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcInjectComponent } from './vcn-prc-inject.component';

describe('VcnPrcInjectComponent', () => {
  let component: VcnPrcInjectComponent;
  let fixture: ComponentFixture<VcnPrcInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
