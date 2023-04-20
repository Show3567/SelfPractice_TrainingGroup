import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement> | any;

  colors: string[] = [
    'red',
    'green',
    'blue',
    'yelllow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'beige',
  ];

  ngOnInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 100, 100);
  }
}
