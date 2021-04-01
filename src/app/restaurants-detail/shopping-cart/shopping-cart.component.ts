import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

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
