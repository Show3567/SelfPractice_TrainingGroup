import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRtcService {
  constructor() {}

  setVideo() {
    return from(
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })
    );
  }
}
