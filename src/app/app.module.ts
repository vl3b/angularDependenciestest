import { NgModule, Component, HostBinding } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OpenCloseComponent } from './open-close/open-close.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  declarations: [AppComponent, OpenCloseComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
