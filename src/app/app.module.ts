import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import {ShoppingCartService} from './restaurants-detail/shopping-cart/shopping-cart.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderService} from './order/order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {SharedModule} from './shared/shared.module';
import {OrderModule} from './order/order.module';
import {HeaderService} from './header/header.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotificationService} from './shared/messages/notification.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [RestaurantsService, ShoppingCartService, OrderService, HeaderService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
