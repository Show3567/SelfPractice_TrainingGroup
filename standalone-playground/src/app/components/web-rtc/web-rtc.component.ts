import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-rtc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
})
export class WebRtcComponent implements OnInit, OnDestroy {
  localStream: any;
  remoteStream: any;

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
