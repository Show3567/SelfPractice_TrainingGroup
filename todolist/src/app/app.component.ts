import { Component, signal } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal<string>('todolist');
  quantity = signal(1);

  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({
    id: 1,
    name: 'AT-AT',
    price: 19416.13,
  });

  vehicles = signal<Vehicle[]>([]);

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

export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
