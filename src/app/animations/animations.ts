import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
  keyframes
} from '@angular/animations';

// Fade in for general use
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// Slide in from the right
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

// Slide in from below
export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ transform: 'translateY(40px)', opacity: 0 }),
    animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
]);

// Staggered animation for lists
export const staggerList = trigger('staggerList', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      stagger(100, [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);

// Logo bounce animation
export const logoBounce = trigger('logoBounce', [
  transition(':enter', [
    animate(
      '1000ms ease-out',
      keyframes([
        style({ transform: 'scale(0.8)', opacity: 0, offset: 0 }),
        style({ transform: 'scale(1.05)', opacity: 1, offset: 0.6 }),
        style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
      ])
    ),
  ]),
]);
