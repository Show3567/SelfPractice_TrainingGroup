import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TodolistComponent } from './todo-list.component';
import { baseUrl } from 'src/app/app.module';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

const mocktodos: Todo[] = [
  {
    userId: 1,
    id: 18,
    title: 'dolorum est consequatur ea mollitia in culpa',
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  },
];

@Component({
  selector: 'app-todo-item',
  template: `<div>{{ todo.title }}</div>`,
})
class TodoItemComponent {
  @Input() todo = {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  };
  @Output() idemiter = new EventEmitter();
}

describe('TodoListComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [TodolistComponent, TodoItemComponent],
      providers: [
        TodoService,
        {
          provide: baseUrl,
          useValue: 'https://jsonplaceholder.typicode.com',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('View', () => {
    it('should has a header', () => {
      const headers = fixture.debugElement.queryAll(By.css('header'));

      expect(headers.length).toBe(2);
      expect(headers[0].classes['header']).toBe(true);
      expect(headers[1].classes['todolist__header']).toBe(true);
    });
    it('should has a main', () => {
      const mains = fixture.debugElement.queryAll(By.css('main'));

      expect(mains.length).toBe(1);
      expect(mains[0].classes['content']).toBe(true);
    });
    it('should has an inputbox', () => {
      const inputs = fixture.debugElement.queryAll(By.css('input'));
      expect(inputs.length).toBe(1);
    });
    it('should has an ul', () => {
      const uls = fixture.debugElement.queryAll(By.css('ul'));
      expect(uls.length).toBe(1);
    });
    it('should has some todoitem in the ul', () => {
      component.todos$ = of(mocktodos);
      fixture.detectChanges();

      const itemeles = fixture.debugElement.queryAll(
        By.css('ul app-todo-item')
      );
      expect(itemeles.length).toBe(mocktodos.length);
    });
  });

  describe('sendNewRequest', () => {
    it('should has an button, click it will trigger sendNewRequest fn', () => {
      const btns = fixture.debugElement.queryAll(By.css('button'));
      expect(btns.length).toBe(1);

      const sendNewRequest = spyOn(component, 'sendNewRequest');
      btns[0].triggerEventHandler('click');

      expect(sendNewRequest).toHaveBeenCalled();
    });
  });

  describe('deleteTodo', () => {
    it('delete todo should be trigger id item emit an id', () => {
      const deleteTodo = spyOn(component, 'deleteTodo');
      component.todos$ = of(mocktodos);
      fixture.detectChanges();

      const item: TodoItemComponent = fixture.debugElement.query(
        By.directive(TodoItemComponent)
      ).componentInstance;
      item.idemiter.emit(item.todo.id);

      expect(deleteTodo).toHaveBeenCalledWith(mocktodos[0].id as number);
    });
  });
});

fdescribe('TodoListComponent With FackService', () => {
  let fixture: ComponentFixture<TodolistComponent>;
  let component: TodolistComponent;
  let fackTodoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    fackTodoService = jasmine.createSpyObj<TodoService>('TodoService', {
      todolist$: of(mocktodos),
      currentTodoList: [],
      getTodos: of(mocktodos),
      deleteTodo: undefined,
      addTodo: of(mocktodos[0]),
    });

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [TodolistComponent],
      providers: [
        {
          provide: TodoService,
          useValue: fackTodoService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call service deleteTodo method', () => {});
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* 
    const fackTodoService: Pick<TodoService, keyof TodoService> = {
      todolist$: of(mocktodos),
      currentTodoList: [],

      getTodos(): Observable<Todo[]> {
        return of(mocktodos);
      },
      deleteTodo(id: number): Observable<null> {
        return of(null);
      },
      addTodo(todo: Todo): Observable<string | Todo> {
        return of(todo);
      },
    };
 */
