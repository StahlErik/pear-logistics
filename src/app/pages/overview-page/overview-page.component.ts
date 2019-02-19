import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/services/logistics.service';
import { ShippingService } from 'src/app/services/shipping.service';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Warehouse } from 'src/app/models/Warehouse';
import { Product } from 'src/app/models/Product';
import { Shipping } from 'src/app/models/Shipping';
import { ProductCount } from 'src/app/models/ProductCount';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  warehouses: Warehouse[];
  products: Product[];
  shippings: Shipping[];
  productCounts: any[];
  //productAvailability = [{}];

  constructor(
    private logisticsService: LogisticsService,
    private shippingService: ShippingService,
    private warehouseService: WarehouseService
  ) {}

  ngOnInit() {
    this.logisticsService.getProducts().subscribe(products => {
      this.products = products;
      this.warehouseService.getWarehouses().subscribe(warehouses => {
        this.warehouses = warehouses;
        this.shippingService.getShippings().subscribe(shippings => {
          this.shippings = shippings;
          this.createObject();
        });
      });
    });
  }
  createObject() {
    var obj2 = {};
    for (var i = 0; i < this.products.length; i++) {
      var obj = [];
      for (var j = 0; j < this.warehouses.length; j++) {
        var amount2: number = 0;

        obj.push({ city: this.warehouses[j].city, amount: amount2 });
      }
      obj2[this.products[i].title] = obj;
    }

    var object = [];
    for (var k = 0; k < this.shippings.length; k++) {
      var obj5: ProductCount;
      this.logisticsService
        .getProduct(this.shippings[k].product)
        .subscribe(product => {
          obj5['product'] = product.title;
        });
      this.warehouseService
        .getWarehouse(this.shippings[k].warehouse)
        .subscribe(warehouse => {
          obj5['city'] = warehouse.city;
        });
      obj5['amount'] = 0;
      object.push(obj5);
    }
    console.log(object);
    this.productCounts = object;
  }
}
