import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { Component } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todolist',
  template: ` <app-todo-item [todo]="todo"></app-todo-item> `,
})
class TestTodolistComponent {
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
  let parentComponent: TestTodolistComponent;
  let parentFixture: ComponentFixture<TestTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, TestTodolistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    parentFixture = TestBed.createComponent(TestTodolistComponent);
    parentComponent = fixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
