import {Component, OnInit} from '@angular/core';
import {HeaderService} from './header.service';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  clearCart() {
    this.headerService.clearCart();
  }



}
