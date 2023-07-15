import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'resturants', loadChildren: () => import('./resturants/resturants.module').then(m => m.ResturantsModule) },
{ path: 'delivery', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
