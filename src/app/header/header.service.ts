import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HeaderService {
  constructor(private shoppingCartService: ShoppingCartService) {
  }

  clearCart() {
    this.shoppingCartService.clear();
  }
}
