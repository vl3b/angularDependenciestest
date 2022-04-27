import { Component, OnInit } from '@angular/core';
import {
  MatCheckboxDefaultOptions,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: {
        clickAction: 'check',
        color: 'warn',
      } as MatCheckboxDefaultOptions,
    },
  ],
})
export class CheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
