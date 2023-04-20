import { Component, Input } from '@angular/core';
import { Fruit } from 'src/app/app.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() items!: Fruit[];
}
