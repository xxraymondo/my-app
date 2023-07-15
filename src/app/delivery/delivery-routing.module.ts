import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { DeliveryOrderDetailsComponent } from './delivery-order-details/delivery-order-details.component';
import { DeliveryOrderHistoryComponent } from './delivery-order-history/delivery-order-history.component';

const routes: Routes = [{ path: '', component: DeliveryComponent },{ path: 'delivery-order-details', component: DeliveryOrderDetailsComponent },{ path: 'delivery-order-history', component: DeliveryOrderHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
