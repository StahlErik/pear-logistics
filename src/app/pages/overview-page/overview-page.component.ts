import { Component, OnInit } from "@angular/core";
import { LogisticsService } from "src/app/services/logistics.service";
import { ShippingService } from "src/app/services/shipping.service";
import { WarehouseService } from "src/app/services/warehouse.service";
import { Warehouse } from "src/app/models/Warehouse";
import { Product } from "src/app/models/Product";
import { Shipping } from "src/app/models/Shipping";
import { ProductCount } from "src/app/models/ProductCount";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "app-overview-page",
  templateUrl: "./overview-page.component.html",
  styleUrls: ["./overview-page.component.scss"]
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
    var obj = this.shippings;
    console.log(obj);
    for (var i = 0; i < obj.length; i++) {
      var obj2 = obj;
      var objDupl =
        obj2.splice(i, 1).find(element => {
          console.log(element.product + "   " + obj[i].product);
          console.log(element.warehouse + "    " + obj[i].warehouse);
          return (
            element.product === obj[i].product &&
            element.warehouse === obj[i].warehouse
          );
        }).product || null;
      console.log("duplicate: " + objDupl);
    }

    /* obj.reduce(function(a, b) {
      if (!a.incoming) {
        a.units = -a.units;
      }
      if (!b.incoming) {
        b.units = -b.units;
      }
      if (a.product == b.product && a.warehouse == b.warehouse) {
        return {
          id: a.id,
          date: a.date,
          product: a.product,
          warehouse: a.warehouse,
          units: a.units + b.units,
          arrived: a.arrived,
          incoming: a.incoming
        };
      } else {
        return {
          id: a.id,
          date: a.date,
          product: a.product,
          warehouse: a.warehouse,
          units: a.units,
          arrived: a.arrived,
          incoming: a.incoming
        };
      } // returns object with property x
    }); */

    /* var countedShipping = obj.reduce(function(summedShippings, shipping) {
      console.log(summedShippings);
      console.log(shipping);
      if (
        shipping.product in summedShippings &&
        shipping.warehouse in summedShippings
      ) {
        summedShippings = {
          id: shipping.id,
          date: shipping.date,
          product: shipping.product,
          warehouse: shipping.warehouse,
          units: shipping.units,
          arrived: shipping.arrived,
          incoming: shipping.incoming
        };
      } else {
        summedShippings = {
          id: shipping.id,
          date: shipping.date,
          product: shipping.product,
          warehouse: shipping.warehouse,
          units: shipping.units,
          arrived: shipping.arrived,
          incoming: shipping.incoming
        };
      }
      return summedShippings;
    }, {}); */

    /* 
    var obj2 = {};
    for (var i = 0; i < this.products.length; i++) {
      var obj = [];
      for (var j = 0; j < this.warehouses.length; j++) {
        var amount2: number = 0;

        obj.push({ city: this.warehouses[j].city, amount: amount2 });
      }
      obj2[this.products[i].title] = obj;
    } */

    /* var object = [];
    console.log(this.products);
    console.log(this.shippings);
    for (var k = 0; k < this.shippings.length; k++) {
      var obj5: ProductCount;
      console.log(this.shippings[k].product);
      obj5["product"] = this.products.find(foundObj => {
        return foundObj.id === this.shippings[k].product;
      }).title;
      /*  obj5["city"] =
       
      console.log(
        this.warehouses.find(foundObj => {
          return foundObj.id === this.shippings[k].warehouse;
        }).city
      );
       
      /* 
      obj5["amount"] = 0;
      object.push(obj5); */
    /* 
      this.warehouseService
        .getWarehouse(this.shippings[k].warehouse)
        .subscribe(warehouse => {
          obj5["city"] = warehouse.city;
        }); */
  } /* 
    console.log(object);
    this.productCounts = object; */
}
