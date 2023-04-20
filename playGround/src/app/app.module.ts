import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeslaInterviewCanvasComponent } from './tesla-interview-canvas/tesla-interview-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    TeslaInterviewCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
