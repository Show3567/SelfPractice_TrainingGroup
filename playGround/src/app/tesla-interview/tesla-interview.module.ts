import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumArrayComponent } from './components/sum-array/sum-array.component';
import { CanvasComponent } from './components/canvas/canvas.component';

import { FilterPipe } from './components/filter/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    SumArrayComponent,
    CanvasComponent,
    FilterComponent,
    FilterPipe,
  ],
  imports: [CommonModule],
  exports: [SumArrayComponent, CanvasComponent, FilterComponent],
})
export class TeslaInterviewModule {}
