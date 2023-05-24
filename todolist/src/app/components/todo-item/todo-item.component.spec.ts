import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { Component } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todolist',
  template: ` <app-todo-item [id]="todo.id"></app-todo-item> `,
})
class TodolistComponent {
  todo: Todo = {
    id: 12,
    userId: 12,
    title: 'this is test data',
    completed: false,
  };
}

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, TodolistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
