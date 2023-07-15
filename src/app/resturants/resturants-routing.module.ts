import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturantsComponent } from './resturants.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{ path: '', component: ResturantsComponent },
{ path: 'menu', component: MenuComponent },{ path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantsRoutingModule { }
