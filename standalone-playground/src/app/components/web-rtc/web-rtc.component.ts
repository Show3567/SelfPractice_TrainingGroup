import { WebRtcService } from './../../services/web-rtc.service';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-rtc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.scss'],
})
export class WebRtcComponent implements OnInit, OnDestroy {
  private localStream!: MediaStream;
  private remoteStream!: MediaStream;

  @ViewChild('user1', { static: true }) user1!: ElementRef;
  @ViewChild('user2', { static: true }) user2!: ElementRef;

  constructor(private webRtcService: WebRtcService) {}

  ngOnInit(): void {
    this.webRtcService.setVideo().subscribe((stream) => {
      this.localStream = stream;
    });
  }

  ngOnDestroy(): void {}
}
