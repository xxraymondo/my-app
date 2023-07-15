import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResturantsRoutingModule } from './resturants-routing.module';
import { ResturantsComponent } from './resturants.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    ResturantsComponent,
    MenuComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ResturantsRoutingModule
  ]
})
export class ResturantsModule { }
