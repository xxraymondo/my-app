import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { DeliveryOrderDetailsComponent } from './delivery-order-details/delivery-order-details.component';
import { DeliveryOrderHistoryComponent } from './delivery-order-history/delivery-order-history.component';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryOrderDetailsComponent,
    DeliveryOrderHistoryComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }
