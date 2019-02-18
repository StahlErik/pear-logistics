import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/Warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-page',
  templateUrl: './warehouse-page.component.html',
  styleUrls: ['./warehouse-page.component.scss']
})
export class WarehousePageComponent implements OnInit {
  warehouses: Warehouse[];
  editWarehouse: Warehouse;

  constructor(private warehouseService: WarehouseService) {}

  addSortedWarehouses(warehouses) {
    warehouses.sort(function(a, b) {
      return a.cityNumber - b.cityNumber;
    });
    this.warehouses = warehouses;
  }

  ngOnInit() {
    this.warehouseService.getWarehouses().subscribe(Warehouses => {
      this.addSortedWarehouses(Warehouses);
    });
  }

  addWarehouse(warehouse: Warehouse) {
    this.warehouseService.addWarehouse(warehouse);
    this.warehouseService.getWarehouses().subscribe(warehouses => {
      this.addSortedWarehouses(warehouses);
    });
  }

  editWarehouse2(warehouse: Warehouse) {
    this.editWarehouse = warehouse;
  }
}
