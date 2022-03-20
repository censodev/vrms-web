import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guest-header-mobile',
  templateUrl: './guest-header-mobile.component.html',
  styleUrls: ['./guest-header-mobile.component.scss']
})
export class GuestHeaderMobileComponent implements OnInit {
  @Input() appName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
