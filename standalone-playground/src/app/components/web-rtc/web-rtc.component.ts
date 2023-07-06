import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Observable,
  Subject,
  from,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import AgoraRTC from 'agora-rtc-sdk-ng';

@Component({
  selector: 'app-web-rtc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
})
export class WebRtcComponent implements OnInit, OnDestroy {
  private peerConnection = new RTCPeerConnection();
  private channel: RTCDataChannel =
    this.peerConnection.createDataChannel('1st channel');

  constructor() {}

  ngOnInit(): void {
    this.channel.onmessage = (e) => console.log('Just got a message ' + e.data);
    this.channel.onopen = (e) => console.log('Connection opened!');

    this.peerConnection.onicecandidate = (e) =>
      console.log(
        'New Ice Candidate! reprinting SDP' +
          JSON.stringify(this.peerConnection.localDescription)
      );

    this.createOffer();
  }
  ngOnDestroy(): void {}

  private async crteateWebRtc() {}

  private async createOffer() {
    const offer = await this.peerConnection.createOffer();
    this.peerConnection.setLocalDescription(offer);
    console.log('set Successfully!');
  }
}
