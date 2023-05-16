import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeslaInterviewModule } from './tesla-interview/tesla-interview.module';
import { WebRTCComponent } from './components/web-rtc/web-rtc.component';

@NgModule({
  declarations: [AppComponent, WebRTCComponent],
  imports: [BrowserModule, AppRoutingModule, TeslaInterviewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
