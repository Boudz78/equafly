import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const collapseExpand = trigger('collapseExpand', [
  state(
    'open',
    style({
      width: '*',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      width: '0',
      opacity: 0,
    })
  ),
  transition('open <=> closed', [animate('0.5s ease-in-out')]),
]);

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate('1s', style({ opacity: 1 }))]),
]);
