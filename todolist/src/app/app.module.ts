import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { BasicScrollComponent } from './components/basic-scroll/basic-scroll.component';
import { TodolistComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const baseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    EditTableComponent,
    BasicScrollComponent,
    TodolistComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    TodoService,
    { provide: baseUrl, useValue: 'https://jsonplaceholder.typicode.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
