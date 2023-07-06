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

declare var iceServerSDK: any;

@Component({
  selector: 'app-web-rtc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
})
export class WebRtcComponent implements OnInit, OnDestroy {
  private APP_ID = 'ed052388dbef42459b02132bfb910eea';
  private token = null;
  private uid = Math.floor(Math.random() * 1000_000) + '';
  private client: any;
  private channel: any;

  private localStream!: MediaStream;
  private remoteStream: MediaStream = new MediaStream();

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
  private peerConnection = new RTCPeerConnection(this.servers);

  private notifier = new Subject();

  @ViewChild('user1', { static: true }) user1!: ElementRef;
  @ViewChild('user2', { static: true }) user2!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.user2.nativeElement.srcObject = this.remoteStream;
  }

  ngOnDestroy(): void {
    this.stopObs();
  }

  private createVideoForUser() {
    from(
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })
    )
      .pipe(
        takeUntil(this.notifier),
        tap((stream) => {
          this.localStream = stream;
          this.user1.nativeElement.srcObject = this.localStream;
        }),
        switchMap((_) => {
          this.localStream.getTracks().forEach((track) => {
            this.peerConnection.addTrack(track, this.localStream);
          });

          this.peerConnection.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
              this.remoteStream.addTrack(track);
            });
          };

          this.peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
            }
          };

          return from(this.peerConnection.createOffer());
        }),
        switchMap((offer) => {
          return from(this.peerConnection.setLocalDescription(offer));
        })
      )
      .subscribe();
  }

  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }

  /* from service */
  // setVideo(): Observable<MediaStream> {
  //   return from(
  //     navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: false,
  //     })
  //   );
  // }

  // createOffer() {
  //   return from(this.peerConnection.createOffer());
  // }
}
