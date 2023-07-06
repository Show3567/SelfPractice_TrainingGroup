import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WebRtcComponent } from './components/web-rtc/web-rtc.component';
import { WebRtcService } from './services/web-rtc.service';
import { WebRtcRmtComponent } from './components/web-rtc-rmt/web-rtc-rmt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TodoListComponent,
    WebRtcComponent,
    WebRtcRmtComponent,
  ],
  providers: [WebRtcService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone-playground';
}
