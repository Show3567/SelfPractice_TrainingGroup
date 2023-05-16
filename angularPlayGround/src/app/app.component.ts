import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playGround';

  items: Fruit[] = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' },
    { id: 4, name: 'date' },
    { id: 5, name: 'elderberry' },
  ];
}

export interface Fruit {
  id: number;
  name: string;
}
