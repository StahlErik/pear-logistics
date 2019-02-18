import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { LogisticsService } from '../../services/logistics.service';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Product } from 'src/app/models/Product';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  @Input() shipping: Shipping;
  @Output() editShipping: EventEmitter<Shipping> = new EventEmitter();
  product: Product;
  warehouse: Warehouse;

  constructor(
    private logisticsService: LogisticsService,
    private warehouseService: WarehouseService
  ) {}

  ngOnInit() {
    this.logisticsService.getProduct(this.shipping.product).subscribe(res => {
      this.product = res;
      //console.log(res);
    });
    this.warehouseService
      .getWarehouse(this.shipping.warehouse)
      .subscribe(res => {
        this.warehouse = res;
        //console.log(res);
      });
    console.log(this.shipping.date);
    //console.log(this.shipping.date.getDay);
    //console.log(this.shipping.date.getFullYear());
  }

  onEdit(shipping) {
    this.editShipping.emit(shipping);
  }
}
