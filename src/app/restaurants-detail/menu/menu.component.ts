import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../menu-item/menu-item.model';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.menuByRestaurantId(this.route.parent.snapshot.params['id']).subscribe(items => this.items = items);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
