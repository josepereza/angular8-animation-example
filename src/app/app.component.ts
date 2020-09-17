import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlited', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlited', animate(200))
      // transition('highlited => normal', animate(200))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlited', style({
        'background-color': 'green',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'blue',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('shrunken <=> *', animate(200))
    ])

  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  title = 'angular-animation';

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlited' : this.state = 'normal';
  }


  onShrink() {
    this.wildState === 'normal' ? this.wildState = 'shrunken' : this.wildState = 'normal';
  }
}
