import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

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
