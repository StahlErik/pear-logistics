import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  @Input() warehouse: Warehouse;
  @Output() editWarehouse: EventEmitter<Warehouse> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit(warehouse) {
    this.editWarehouse.emit(warehouse);
  }
}
