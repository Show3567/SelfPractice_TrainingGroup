import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/services/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  // readonly todo = input()
  @Input() todo!: Todo;
  @Output() deleteTodoEmitter = new EventEmitter<number>();

  deleteTodo() {
    this.deleteTodoEmitter.emit(this.todo.id);
  }
}
