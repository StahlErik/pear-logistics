import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { WarehousePageComponent } from './pages/warehouse-page/warehouse-page.component';
import { ShippingPageComponent } from './pages/shipping-page/shipping-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  },
  { path: 'warehouse-page', component: WarehousePageComponent },
  { path: 'shipping-page', component: ShippingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
