import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  mergeMap,
  Observable,
  retry,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { baseUrl } from './../app.module';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todoPath = 'todos';
  private requestMap: { [key: string]: Observable<Todo[]> } = {};
  private todos$ = new BehaviorSubject<Todo[]>([]);
  todolist$ = this.todos$.asObservable();

  get currentTodoList() {
    return this.todos$.value;
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(baseUrl) private readonly baseUrl: string
  ) {}

  getTodos(): Observable<Todo[]> {
    const url = [this.baseUrl, this.todoPath].join('/');
    if (!this.requestMap[url]) {
      this.requestMap[url] = this.http.get<Todo[]>(url).pipe(
        tap((todos: Todo[]) => {
          this.todos$.next(todos.reverse());
        }),
        shareReplay(1),
        catchError((err) => {
          return throwError(() => err);
        })
      );
    }
    return this.requestMap[url];
    // return this.http.get<Todo[]>(url).pipe(
    //   tap((todos: Todo[]) => {
    //     this.todos$.next(todos.reverse());
    //   })
    // );
  }

  deleteTodo(id: number): Observable<null> {
    const todos = this.todos$.value.filter((todo: Todo) => +todo.id! !== +id);
    this.todos$.next(todos);

    return this.http
      .delete<null>([this.baseUrl, this.todoPath, id].join('/'))
      .pipe
      // mergeMap((_) => {
      //   return throwError(() => 'err');
      // }),
      // retry(4) // if error, retry this obs;
      ();
  }

  addTodo(todo: Todo): Observable<Todo | string> {
    return this.http
      .post<Todo>([this.baseUrl, this.todoPath].join('/'), todo)
      .pipe(
        tap((todo: Todo) => {
          const findTodo = this.todos$.value.find(
            (ele) => todo.title === ele.title
          );
          const todos = findTodo
            ? this.todos$.value
            : [todo, ...this.todos$.value];

          this.todos$.next(todos);
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  getJson() {
    return this.http.get('assets/mock.json');
  }
}
