import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

  lastRating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate;
    this.lastRating = rate;
  }

  setTemporaryRating(rate: number) {
    this.rate = rate;
  }

  returnRating() {
    this.rate = this.lastRating;
  }

  sendRating(rate: number) {
    this.rated.emit(rate);
  }

}
