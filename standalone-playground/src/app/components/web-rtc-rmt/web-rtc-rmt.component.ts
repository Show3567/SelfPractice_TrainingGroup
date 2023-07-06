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
  offer = '';
}
