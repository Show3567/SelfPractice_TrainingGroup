import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeslaInterviewModule } from './tesla-interview/tesla-interview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TeslaInterviewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
