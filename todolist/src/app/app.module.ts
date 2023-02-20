import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { BasicScrollComponent } from './components/basic-scroll/basic-scroll.component';

@NgModule({
  declarations: [AppComponent, EditTableComponent, BasicScrollComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
