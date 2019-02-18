import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {
  @Input() warehouses: Warehouse[];
  @Output() editWarehouse2: EventEmitter<Warehouse> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  editWarehouse(warehouse: Warehouse) {
    this.editWarehouse2.emit(warehouse);
  }
}
