import {NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RatingComponent} from './rating/rating.component';
import {RadioComponent} from './radio/radio.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
  declarations: [InputComponent, RatingComponent, RadioComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule {}
