import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('list <=> detail', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

// export const slideUpAnimation = trigger(
//   // 'slideInOut',
//   // [
//   //   state('in', style({height: '*', opacity: 0})),
//   //   transition(':leave', [
//   //     style({height: '*', opacity: 1}),
//   //
//   //     group([
//   //       animate(300, style({height: 0})),
//   //       animate('200ms ease-in-out', style({'opacity': '0'}))
//   //     ])
//   //
//   //   ]),
//   //   transition(':enter', [
//   //     style({height: '0', opacity: 0}),
//   //
//   //     group([
//   //       animate(300, style({height: '*'})),
//   //       animate('400ms ease-in-out', style({'opacity': '1'}))
//   //     ])
//   //
//   //   ])
//   // ]);
// );
