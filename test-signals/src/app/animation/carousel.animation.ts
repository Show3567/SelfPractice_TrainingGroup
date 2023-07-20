import { style, animate, animation, keyframes } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0, transform: 'scale(0.7)' }), // start state
  animate(
    '{{timer}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 1, transform: 'scale(1)' })
  ),
]);

export const fadeOut = animation([
  animate(
    '{{timer}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ opacity: 0, transform: 'scale(1)' })
  ),
]);
