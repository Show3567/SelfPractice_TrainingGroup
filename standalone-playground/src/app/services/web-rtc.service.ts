import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRtcService {
  constructor() {}

  setVideo(): Observable<MediaStream> {
    return from(
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })
    );
  }
}
