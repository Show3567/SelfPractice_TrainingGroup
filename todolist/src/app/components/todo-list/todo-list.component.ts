import { Component, inject, OnInit } from '@angular/core';
import { catchError, ignoreElements, Observable, of } from 'rxjs';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  // providers: [TodoService], // <----------------------------
})
export class TodolistComponent implements OnInit {
  private todoService = inject(TodoService); // <--------Inject service
  todos$: Observable<Todo[]> = this.todoService.todolist$; // behaviousSubject.asObservable;
  todosErr$ = this.todos$.pipe(
    ignoreElements(), // only pass complete and error;
    catchError((err) => {
      return of('this is an err can be catch by async');
    })
  ); // to pass an Err obs;

  todo: Todo = {
    userId: 34,
    title: '',
    completed: false,
  };

  // constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
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
