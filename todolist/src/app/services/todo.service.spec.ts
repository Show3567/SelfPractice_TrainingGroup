import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { baseUrl } from '../app.module';
import { Todo } from '../interfaces/todo.interface';
import { HttpErrorResponse } from '@angular/common/http';

const errorEvent = new ErrorEvent('API error');
const serverresponse: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodoService,
        {
          provide: baseUrl,
          useValue: 'https://jsonplaceholder.typicode.com',
        },
      ],
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
    url = [TestBed.inject(baseUrl), service['todoPath']].join('/');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addTodo', () => {
    const mocktodo: Todo = {
      userId: 1,
      id: 10,
      title: 'this is an mocked todo',
      completed: false,
    };

    it('should send a post request to server', () => {
      let result: any;
      service.addTodo(mocktodo).subscribe((todo) => {
        result = todo;
      });
      const req = httpMock.expectOne(url);
      req.flush(mocktodo);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mocktodo);
      expect(result).toEqual(mocktodo);
    });

    it('should no change if the todo title is same', () => {
      service['todos$'].next([mocktodo]);

      service.addTodo(mocktodo).subscribe();
      let req = httpMock.expectOne(url);
      req.flush(mocktodo);

      service.todolist$.subscribe((data) => {
        expect(data.length).toBe(1);
      });
    });

    it('should change if the todo title not same', () => {
      service['todos$'].next([
        {
          ...mocktodo,
          title: 'diff title',
        },
      ]);

      service.addTodo(mocktodo).subscribe();
      const req = httpMock.expectOne(url);
      req.flush(mocktodo);

      service.todolist$.subscribe((data) => {
        expect(data.length).toBe(2);
      });
    });

    it('should catch error', () => {
      const status = 500;
      const statusText = 'Server error';

      let actualError: HttpErrorResponse | undefined;

      service.addTodo(mocktodo).subscribe(
        fail,
        (error: HttpErrorResponse) => {
          actualError = error;
        },
        fail
      );

      const req = httpMock.expectOne(url);
      req.error(errorEvent, { status, statusText });
      httpMock.verify();
      expect(req.request.method).toEqual('POST');

      if (!actualError) {
        throw new Error('actualError not defined');
      }
      expect(actualError.error).toEqual(errorEvent);
      expect(actualError.status).toBe(status);
      expect(actualError.statusText).toBe(statusText);
    });
  });

  describe('deleteTodo', () => {
    it('should send a delete request to server', () => {
      const id = 3;
      const mocktodos = [...serverresponse];
      service['todos$'].next(mocktodos);

      let todos: any;
      service.todolist$.subscribe((todolist) => {
        todos = todolist;
      });

      service.deleteTodo(id).subscribe();
      const req = httpMock.expectOne([url, id].join('/'));
      req.flush(serverresponse);

      expect(req.request.method).toBe('DELETE');
      expect(todos).toEqual(mocktodos.filter((todo) => todo.id !== id));
    });
  });

  describe('getTodos', () => {
    it('should send send get requst when run getTodos', () => {
      let result: any;
      service.getTodos().subscribe((todos) => {
        result = todos;
      });
      const req = httpMock.expectOne(url);
      req.flush(serverresponse);

      expect(req.request.method).toBe('GET');
      expect(result).toEqual(serverresponse);
    });

    it('should get data change from todolist$', () => {
      let result: any;
      service.todolist$.subscribe((todos) => {
        result = todos;
      });

      service.getTodos().subscribe();
      const req = httpMock.expectOne(url);
      req.flush(serverresponse);

      expect(req.request.method).toBe('GET');
      expect(result).toEqual(serverresponse);
    });

    it('should cashe data without send same request', () => {
      let result: any;

      service.getTodos().subscribe();
      const req = httpMock.expectOne(url);
      req.flush(serverresponse);
      expect(req.request.method).toBe('GET');

      service.getTodos().subscribe((todos) => {
        result = todos;
      });
      expect(result).toEqual(serverresponse);
    });

    it('should catch error', () => {
      const status = 500;
      const statusText = 'Server error';

      let actualError: HttpErrorResponse | undefined;

      service.getTodos().subscribe(
        fail,
        (error: HttpErrorResponse) => {
          actualError = error;
        },
        fail
      );

      const request = httpMock.expectOne({ method: 'GET', url: url });
      request.error(errorEvent, { status, statusText });
      httpMock.verify();

      if (!actualError) {
        throw new Error('actualError not defined');
      }
      expect(actualError.error).toEqual(errorEvent);
      expect(actualError.status).toBe(status);
      expect(actualError.statusText).toBe(statusText);
    });
  });

  describe('currentTodoList', () => {
    it('should get current data in todos$', () => {
      service['todos$'].next(serverresponse);
      expect(service.currentTodoList).toEqual(serverresponse);
    });
  });
});
