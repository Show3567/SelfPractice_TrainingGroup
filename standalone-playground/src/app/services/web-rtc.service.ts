import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRtcService {
  private servers = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
  };
  peerConnection = new RTCPeerConnection(this.servers);

  constructor() {}

  setVideo(): Observable<MediaStream> {
    return from(
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })
    );
  }

  createOffer() {
    return from(this.peerConnection.createOffer());
  }
}
