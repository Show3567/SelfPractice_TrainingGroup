import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  input = '';
  title = signal<string>('test-signals');
  items = new Array(20000).fill(0);

  settitle() {
    this.title.set(this.input);
  }
}
