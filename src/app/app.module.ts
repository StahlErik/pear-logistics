import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import {
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatTableModule
} from '@angular/material';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from './environment';
import { WarehousePageComponent } from './pages/warehouse-page/warehouse-page.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { CreateWarehouseFormComponent } from './components/create-warehouse-form/create-warehouse-form.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ShippingListComponent } from './components/shipping-list/shipping-list.component';
import { CreateShippingFormComponent } from './components/create-shipping-form/create-shipping-form.component';
import { ShippingPageComponent } from './pages/shipping-page/shipping-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductListComponent,
    ProductComponent,
    ProductPageComponent,
    CreateProductFormComponent,
    WarehousePageComponent,
    WarehouseComponent,
    WarehouseListComponent,
    CreateWarehouseFormComponent,
    ShippingComponent,
    ShippingListComponent,
    CreateShippingFormComponent,
    ShippingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),

    //Material
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
