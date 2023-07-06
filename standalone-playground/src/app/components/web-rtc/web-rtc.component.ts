import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  private channel!: RTCDataChannel;

  intervalRef: any;

  constructor() {}

  ngOnInit(): void {
    this.peerConnection.onconnectionstatechange = (e) => {
      console.log(this.peerConnection.iceConnectionState);
    };
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  async createOffer() {
    this.createChannel();

    this.peerConnection.onicecandidate = (e) => {
      this.offer = JSON.stringify(this.peerConnection.localDescription);
      console.log('new ice Candidate! host! ', this.offer);
    };

    const createdoffer = await this.peerConnection.createOffer();
    this.peerConnection.setLocalDescription(createdoffer);
  }

  createConnection() {
    const createdAnswer = new RTCSessionDescription(JSON.parse(this.answer));
    this.peerConnection.setRemoteDescription(createdAnswer);
  }

  createChannel() {
    this.channel = this.peerConnection.createDataChannel('channel');

    this.channel.onopen = (e) => {
      console.log('Connection offer opened!');
    };
    this.channel.onmessage = (e) =>
      console.log('Just got a message from remote ' + e.data);
    this.channel.onerror = (e) => console.log(e);
  }

  sendMessage() {
    this.channel.send('hello world');
  }
}
