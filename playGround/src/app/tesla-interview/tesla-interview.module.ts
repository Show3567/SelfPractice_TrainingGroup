import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumArrayComponent } from './components/sum-array/sum-array.component';
import { CanvasComponent } from './components/canvas/canvas.component';

@NgModule({
  declarations: [SumArrayComponent, CanvasComponent],
  imports: [CommonModule],
  exports: [SumArrayComponent, CanvasComponent],
})
export class TeslaInterviewModule {}
