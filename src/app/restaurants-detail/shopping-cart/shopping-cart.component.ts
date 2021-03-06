import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready';

  constructor(private shoppingcartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingcartService.items;
  }

  total(): number {
    return this.shoppingcartService.total();
  }

  clear() {
    this.shoppingcartService.clear();
  }

  removeItem(item: CartItem) {
    this.shoppingcartService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingcartService.addItem(item);
  }
}
