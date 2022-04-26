import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  MatCheckboxDefaultOptions,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';

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
  providers: [
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions,
    },
  ],
})
export class OpenCloseComponent {
  isDark = true;

  toggle() {
    this.isDark = !this.isDark;
  }
}
