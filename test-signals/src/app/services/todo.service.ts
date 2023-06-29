import { Injectable, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  todos = signal<Todo[]>([]);

  constructor(private readonly http: HttpClient) {
    effect(() => console.log('log: ', this.todos()));
  }

  getTodos() {
    return this.http.get<Todo[]>(this.baseUrl).pipe(
      tap((todos) => {
        this.todos.set(todos);
      })
    );
  }

  deleteTodo(id: number) {
    this.todos.update((list) => {
      return list.filter((todo) => +todo.id !== +id);
    });
  }
}
