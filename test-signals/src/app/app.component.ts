import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  input = '';
  items = new Array(200).fill(0);
  title = signal<string>('test-signals');

  settitle() {
    this.title.set(this.input);
  }

  changetitle() {
    this.title.set('the change');
  }
}
