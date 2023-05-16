import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from 'src/app/app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Fruit[], ...args: unknown[]): unknown {
    return null;
  }
}
