import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.scss']
})
export class GuestHeaderComponent implements OnInit {
  @Input() appName!: string;
  @Output() logout = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}
