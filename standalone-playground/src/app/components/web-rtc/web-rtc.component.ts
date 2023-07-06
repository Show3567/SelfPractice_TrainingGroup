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
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-web-rtc',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
})
export class WebRtcComponent implements OnInit, OnDestroy {
  offer = '';
  answer = '';

  private peerConnection = new RTCPeerConnection();
  private channel: RTCDataChannel =
    this.peerConnection.createDataChannel('1st channel');

  private peerConnection_remote = new RTCPeerConnection();
  private channel_remote: RTCDataChannel =
    this.peerConnection_remote.createDataChannel('1st channel');

  constructor() {}

  ngOnInit(): void {
    this.channel.onmessage = (e) => console.log('Just got a message ' + e.data);
    this.channel.onopen = (e) => console.log('Connection opened!');

    this.peerConnection.onicecandidate = (e) =>
      console.log(
        'New Ice Candidate! reprinting SDP' +
          JSON.stringify(this.peerConnection.localDescription)
      );
  }
  ngOnDestroy(): void {}

  async createOffer() {
    const createdoffer = await this.peerConnection.createOffer();
    this.peerConnection.setLocalDescription(createdoffer);

    this.offer = JSON.stringify(createdoffer);
    console.log('set Successfully!');
  }

  async createAnswer() {
    const createdoffer = JSON.parse(this.offer);

    this.peerConnection_remote.onicecandidate = (e) =>
      console.log(
        'New Ice Candidate! reprinting SDP' +
          JSON.stringify(this.peerConnection_remote.localDescription)
      );
    this.peerConnection_remote.ondatachannel = (e) => {
      const dc = e.channel;
      dc.onmessage = (e) => console.log('new message from client! ' + e.data);
      dc.onopen = (e) => console.log('Connection opened!');
    };

    await this.peerConnection_remote.setRemoteDescription(createdoffer);
    console.log('offer set');

    const createdAnswer = await this.peerConnection_remote.createAnswer();
    this.peerConnection_remote.setLocalDescription(createdAnswer);

    this.answer = JSON.stringify(createdAnswer);
    console.log('answer created');
  }
}
