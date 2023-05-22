import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  catchError,
  ignoreElements,
  mergeMap,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService], // <----------------------------
})
export class TodolistComponent implements OnInit {
  // service = new Service();

  private todoService = inject(TodoService); // <--------Inject service
  todos$ = this.todoService.todolist$
    .pipe
    // tap(_ => {
    //   throw new Error('error');
    // })
    ();
  todosErr$ = this.todos$.pipe(
    ignoreElements(), // only pass complete and error;
    catchError((err) => {
      return of('this is an err can be catch by async');
    })
  ); // handle error in async pipe

  todo: Todo = {
    userId: 34,
    title: '',
    completed: false,
  };

  // constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      () => {},
      (err) => {
        console.log(err);
      }
    );
    console.log(this.todoService.currentTodoList);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
    console.log(this.todoService.currentTodoList);
  }

  addTodo() {
    if (this.todo.title.trim() !== '') {
      this.todoService.addTodo(this.todo).subscribe();
    }
  }

  sendNewRequest() {
    this.todoService.getTodos().subscribe(console.log);
  }
}
