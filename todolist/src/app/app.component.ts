import { Component, signal } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('todolist');

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getJson().subscribe(console.log);
  }

  keyupEvent() {
    console.log('keyup');
  }
  clickEvent() {
    console.log('click');
  }
  keydownEvent() {
    console.log('keydown');
  }
  keypressEvent() {
    console.log('keypress');
  }
  mousedownEvent() {
    console.log('mousedown');
  }
  focusEvent() {
    console.log('focus');
  }
  blurEvent() {
    console.log('blur');
  }
  dblclickEvent() {
    console.log('doubleclick');
  }
}
