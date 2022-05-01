import {Pipe, PipeTransform} from '@angular/core';
import {VcnProfileStatusEnum} from "../../enums/vcn-profile-status.enum";

@Pipe({
  name: 'vcnProfileStatus'
})
export class VcnProfileStatusPipe implements PipeTransform {
  transform(value: VcnProfileStatusEnum, ...args: unknown[]): unknown {
    switch (value) {
      case VcnProfileStatusEnum.CREATED:
        return 'Đã đăng ký'
      case VcnProfileStatusEnum.CHECKED_IN:
        return 'Đã đến điểm tiêm'
      case VcnProfileStatusEnum.TESTED_FAILED:
        return 'Khám sàng lọc thất bại'
      case VcnProfileStatusEnum.TESTED_PASSED:
        return 'Khám sàng lọc thành công'
      case VcnProfileStatusEnum.PAID:
        return 'Đã thanh toán'
      case VcnProfileStatusEnum.INJECTED:
        return 'Theo dõi sau tiêm'
      case VcnProfileStatusEnum.COMPLETED:
        return 'Đã hoàn thành'
      case VcnProfileStatusEnum.CANCELED:
        return 'Đã hủy tiêm'
      case VcnProfileStatusEnum.FAILED:
        return 'Triệu chứng xấu'
    }
    return null;
  }

}
