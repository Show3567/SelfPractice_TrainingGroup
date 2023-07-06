import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-web-rtc-rmt',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './web-rtc-rmt.component.html',
  styleUrls: ['./web-rtc-rmt.component.scss'],
})
export class WebRtcRmtComponent {
  private rpc = new RTCPeerConnection();
  private rchannel!: RTCDataChannel;

  offer = '';
  answer = '';

  intervalRef: any;

  constructor() {}

  ngOnInit(): void {
    this.intervalRef = setInterval(
      () => console.log(this.rpc.connectionState),
      2000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  async createAnswer() {
    try {
      this.rpc.onicecandidate = (e) => {
        this.answer = JSON.stringify(this.rpc.localDescription);
        console.log('New Ice Candidate! reprinting SDP remote ', this.answer);
      };

      this.rpc.ondatachannel = (e) => {
        this.rchannel = e.channel;

        this.rchannel.onmessage = (e) =>
          console.log('new message from client! ' + e.data);
        this.rchannel.onopen = (e) => console.log('Connection answer opened!');
        this.rchannel.onerror = (e) => console.log(e);
      };

      const createdoffer = new RTCSessionDescription(JSON.parse(this.offer));

      await this.rpc.setRemoteDescription(createdoffer);
      console.log('offer set');

      const createdAnswer = await this.rpc.createAnswer();
      await this.rpc.setLocalDescription(createdAnswer);

      this.answer = JSON.stringify(createdAnswer);
      console.log('answer created');
    } catch (error) {
      console.log(error);
    }
  }
}
