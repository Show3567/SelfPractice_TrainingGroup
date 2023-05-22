import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() idemiter = new EventEmitter();

  getId() {
    this.idemiter.emit(this.todo.id);
  }
}
