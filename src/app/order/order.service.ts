import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurants-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(json => json.id);
  }

  clear() {
    this.cartService.clear();
  }
}
