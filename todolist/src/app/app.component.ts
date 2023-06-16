import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getJson().subscribe(console.log);
  }
}
