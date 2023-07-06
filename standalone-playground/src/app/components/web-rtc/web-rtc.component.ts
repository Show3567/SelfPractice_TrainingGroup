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
    this.intervalRef = setInterval(
      () => console.log(this.peerConnection.iceConnectionState),
      2000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  async createOffer() {
    try {
      this.createChannel();

      this.peerConnection.onicecandidate = (e) =>
        console.log(
          'new ice Candidate! host! ',
          this.peerConnection.localDescription
        );

      const createdoffer = await this.peerConnection.createOffer();
      this.peerConnection.setLocalDescription(createdoffer);

      this.offer = JSON.stringify(createdoffer);
      console.log('set Successfully!', this.peerConnection.iceConnectionState);
    } catch (error) {
      console.log(error);
    }
  }

  createConnection() {
    try {
      console.log('createing...');
      const createdAnswer = new RTCSessionDescription(JSON.parse(this.answer));
      this.peerConnection.setRemoteDescription(createdAnswer);
      console.log('done');
    } catch (error) {
      console.log(error);
    }
  }

  createChannel() {
    this.channel = this.peerConnection.createDataChannel('channel');

    this.channel.onopen = (e) => {
      console.log('Connection offer opened!');
    };
    this.channel.onmessage = (e) => console.log('Just got a message ' + e.data);
    this.channel.onerror = (e) => console.log(e);
  }

  sendMessage() {
    this.channel.send('hello world');
  }
}
