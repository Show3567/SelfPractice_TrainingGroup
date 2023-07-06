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
  // private servers = {
  //   iceServers: [
  //     {
  //       urls: [
  //         'stun:stun1.l.google.com:19302',
  //         'stun:stun2.l.google.com:19302',
  //       ],
  //     },
  //   ],
  // };
  offer = '';
  answer = '';

  private peerConnection = new RTCPeerConnection();
  private channel!: RTCDataChannel;

  private rpc = new RTCPeerConnection();
  private rchannel!: RTCDataChannel;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  async createOffer() {
    this.channel = this.peerConnection.createDataChannel('channel');

    this.channel.onopen = (e) => {
      console.log('Connection offer opened!');
    };
    this.channel.onmessage = (e) => console.log('Just got a message ' + e.data);

    this.peerConnection.onicecandidate = (e) =>
      console.log(
        'New Ice Candidate! reprinting SDP ',
        this.peerConnection.localDescription
      );

    this.peerConnection.oniceconnectionstatechange = (e) =>
      console.log('status: ', this.peerConnection.iceConnectionState);

    const createdoffer = await this.peerConnection.createOffer();
    this.peerConnection.setLocalDescription(createdoffer);

    this.offer = JSON.stringify(createdoffer);
    console.log('set Successfully!');
  }

  async createAnswer() {
    this.rpc.onicecandidate = (e) =>
      console.log(
        'New Ice Candidate! reprinting SDP remote ',
        this.rpc.localDescription
      );

    this.rpc.ondatachannel = (e) => {
      this.rchannel = e.channel;

      this.rchannel.onmessage = (e) =>
        console.log('new message from client! ' + e.data);
      this.rchannel.onopen = (e) => console.log('Connection answer opened!');
    };

    this.rpc.oniceconnectionstatechange = (e) =>
      console.log('status: ', this.rpc.iceConnectionState);

    const createdoffer = new RTCSessionDescription(JSON.parse(this.offer));

    await this.rpc.setRemoteDescription(createdoffer);
    console.log('offer set');

    const createdAnswer = await this.rpc.createAnswer({
      optional: [{ RtpDataChannels: true }],
    });
    this.rpc.setLocalDescription(createdAnswer);

    this.answer = JSON.stringify(createdAnswer);
    console.log('answer created');
  }

  async createConnection() {
    console.log('createing...');
    const createdAnswer = new RTCSessionDescription(JSON.parse(this.answer));
    await this.peerConnection.setRemoteDescription(createdAnswer);
    console.log('done');
  }

  sendMessage() {
    this.channel.send('hello world');
  }
}
