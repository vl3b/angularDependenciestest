import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'light',
        style({
          height: '500px',
          opacity: 1,
          backgroundColor: '#ffffff',
          color: '#000000',
        })
      ),
      state(
        'dark',
        style({
          height: '500px',
          opacity: 1,
          backgroundColor: '#000000',
          color: '#ffffff',
        })
      ),
      transition('dark => light', [animate('1s')]),
      transition('light => dark', [animate('1s')]),
    ]),
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css'],
})
export class OpenCloseComponent {
  isDark = true;

  toggle() {
    this.isDark = !this.isDark;
  }
}
