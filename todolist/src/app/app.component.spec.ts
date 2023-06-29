import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { baseUrl } from './app.module';
import { Component } from '@angular/core';
// import { TodolistComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-todolist',
})
class TodolistComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, TodolistComponent],
      providers: [TodoService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  // it('should create the app', () => {
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'todolist'`, () => {
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('todolist');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'todolist app is running!'
  //   );
  // });
});
