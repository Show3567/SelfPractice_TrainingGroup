import { Component, Signal } from '@angular/core';
import { Todo } from 'src/app/services/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todolist!: Signal<Todo[]>;

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todolist = this.todoService.todos;
    this.todoService.getTodos().subscribe();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
