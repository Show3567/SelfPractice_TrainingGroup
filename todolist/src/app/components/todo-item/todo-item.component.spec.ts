import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Todo } from 'src/app/interfaces/todo.interface';

const mocktodo: Todo = {
  id: 12,
  userId: 12,
  title: 'this is test data',
  completed: false,
};

@Component({
  selector: 'app-todolist',
  template: `
    <app-todo-item [todo]="todo" (idemiter)="getTodoId($event)"></app-todo-item>
  `,
})
class TestTodolistComponent {
  todo: Todo = mocktodo;

  getTodoId(id: number) {
    return id;
  }
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
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get todo from parent component', () => {
    const childfixture: DebugElement = parentFixture.debugElement.query(
      By.css('app-todo-item')
    );
    const childcomponent: TodoItemComponent = childfixture.componentInstance;
    expect(childcomponent.todo).toEqual(mocktodo);
  });

  it('should emit todoid to parent', () => {
    const childfixture: DebugElement = parentFixture.debugElement.query(
      By.css('app-todo-item')
    );
    const childcomponent: TodoItemComponent = childfixture.componentInstance;
    childcomponent.idemiter.emit(mocktodo.id);

    const emiterSpy = spyOn(childcomponent.idemiter, 'emit');
    const deleteBtn = childfixture.query(By.css('button'));
    deleteBtn.triggerEventHandler('click');

    expect(emiterSpy).toHaveBeenCalled();
  });
});
