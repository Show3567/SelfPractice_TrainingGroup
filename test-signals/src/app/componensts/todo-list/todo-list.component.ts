import { Component, Signal, computed, signal } from '@angular/core';
import { Todo } from 'src/app/services/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todolist!: Signal<Todo[]>;

  x = signal(0);
  y = signal(0);
  sum = computed(() => this.x() + this.y());

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todolist = this.todoService.todos;
    this.getTodos();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  getTodos() {
    this.todoService.getTodos().subscribe();
  }

  incressx() {
    this.x.update((val) => val + 1);
  }
  decressx() {
    this.x.update((val) => val - 1);
  }
  incressy() {
    this.y.update((val) => val + 1);
  }
  decressy() {
    this.y.update((val) => val - 1);
  }
}
