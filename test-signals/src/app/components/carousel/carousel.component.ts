import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from '@angular/animations';
import { fadeIn, fadeOut } from 'src/app/animation/carousel.animation';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(fadeIn, {
          params: {
            timer: '300ms',
          },
        }),
      ]),
      transition('* => void', [
        useAnimation(fadeOut, {
          params: {
            timer: '300ms',
          },
        }),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() slides!: { src: string }[];

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}
