import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { ShippingService } from 'src/app/services/shipping.service';
import { Product } from 'src/app/models/Product';
import { Warehouse } from 'src/app/models/Warehouse';
import { LogisticsService } from 'src/app/services/logistics.service';
import { Observable } from 'rxjs';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-create-shipping-form',
  templateUrl: './create-shipping-form.component.html',
  styleUrls: ['./create-shipping-form.component.scss']
})
export class CreateShippingFormComponent implements OnInit {
  buttonText: String;
  clearText: String;
  deleteText: String;
  currentID: string;
  formTitle: string;
  products: Product[];
  warehouses: Warehouse[];

  constructor(
    private shippingService: ShippingService,
    private logisticsService: LogisticsService,
    private warehouseService: WarehouseService
  ) {}

  @Input()
  set editShipping(editShipping: Shipping) {
    if (editShipping) {
      this.date = editShipping.date;
      this.product = editShipping.product;
      this.warehouse = editShipping.warehouse;
      this.units = editShipping.units;
      this.arrived = editShipping.arrived;
      this.incoming = editShipping.incoming;
      this.buttonText = 'Ändra';
      this.clearText = 'Rensa';
      this.deleteText = 'Ta bort leverans';
      this.formTitle = 'Redigera leverans';
      this.currentID = editShipping.id;
    }
  }

  @Output() addShipping: EventEmitter<any> = new EventEmitter();
  date: Timestamp<Date>;
  product: string;
  //productID: string;
  warehouse: string;
  //warehouseID: string;
  units: number;
  arrived: boolean = false;
  incoming: boolean = false;

  ngOnInit() {
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till leverans';
    this.logisticsService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.warehouseService.getWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });
  }

  onSubmit() {
    //this.productID = this.product.id;
    //this.warehouseID = this.warehouse.id;
    const addShipping = {
      date: this.date,
      product: this.product,
      warehouse: this.warehouse,
      units: this.units,
      arrived: this.arrived,
      incoming: this.incoming
    };
    const editShipping = {
      date: this.date,
      product: this.product,
      warehouse: this.warehouse,
      units: this.units,
      arrived: this.arrived,
      incoming: this.incoming,
      id: this.currentID
    };
    console.log(addShipping);
    this.shippingService.getShipping(this.currentID).subscribe(res => {
      if (res) {
        this.shippingService.editShipping(editShipping.id, editShipping);
      } else {
        this.addShipping.emit(addShipping);
      }
    });
    this.clearForm();
    this.buttonText = 'Lägg till';
  }

  clearForm() {
    this.date = null;
    this.product = null;
    this.warehouse = null;
    this.units = null;
    this.arrived = false;
    this.incoming = false;
    this.clearText = null;
    this.deleteText = null;
    this.currentID = null;
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till färdigvarulager';
  }

  deleteShipping() {
    this.shippingService.deleteShipping(this.currentID);
    this.clearForm();
  }
}
