import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {VcnProfileStatusEnum} from "../../enums/vcn-profile-status.enum";

@Directive({
  selector: '[appVcnProfileStatus]'
})
export class VcnProfileStatusDirective implements OnInit {
  @Input() vcnProfileStatus!: string;
  @Input() primaryClass!: string;
  @Input() warningClass!: string;
  @Input() successClass!: string;
  @Input() dangerClass!: string;

  constructor(private hostElement: ElementRef) {
  }

  ngOnInit(): void {
    this.hostElement.nativeElement.classList.add(this.getClassName(this.vcnProfileStatus))
  }

  getClassName(status: string): string {
    switch (status) {
      case VcnProfileStatusEnum.CHECKED_IN:
      case VcnProfileStatusEnum.TESTED_PASSED:
      case VcnProfileStatusEnum.PAID:
      case VcnProfileStatusEnum.INJECTED:
        return this.warningClass;
      case VcnProfileStatusEnum.COMPLETED:
        return this.successClass;
      case VcnProfileStatusEnum.TESTED_FAILED:
      case VcnProfileStatusEnum.CANCELED:
      case VcnProfileStatusEnum.FAILED:
        return this.dangerClass;
      case VcnProfileStatusEnum.CREATED:
      default:
        return this.primaryClass;
    }
  }
}
