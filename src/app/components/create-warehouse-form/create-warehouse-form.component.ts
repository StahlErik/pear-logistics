import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-create-warehouse-form',
  templateUrl: './create-warehouse-form.component.html',
  styleUrls: ['./create-warehouse-form.component.scss']
})
export class CreateWarehouseFormComponent implements OnInit {
  buttonText: String;
  clearText: String;
  deleteText: String;
  currentID: string;
  formTitle: string;

  constructor(private warehouseService: WarehouseService) {}

  @Input()
  set editWarehouse(editWarehouse: Warehouse) {
    if (editWarehouse) {
      this.city = editWarehouse.city;
      this.cityNumber = editWarehouse.cityNumber;
      this.buttonText = 'Ändra';
      this.clearText = 'Rensa';
      this.deleteText = 'Ta bort färdigvarulager';
      this.formTitle = 'Redigera färdigvarulager';
      this.currentID = editWarehouse.id;
    }
  }

  @Output() addWarehouse: EventEmitter<any> = new EventEmitter();
  city: string;
  cityNumber: number;

  ngOnInit() {
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till färdigvarulager';
  }

  onSubmit() {
    const addWarehouse = {
      city: this.city,
      cityNumber: this.cityNumber
    };
    const editWarehouse = {
      city: this.city,
      cityNumber: this.cityNumber,
      id: this.currentID
    };
    this.warehouseService.getWarehouse(this.currentID).subscribe(res => {
      if (res) {
        this.warehouseService.editWarehouse(editWarehouse.id, editWarehouse);
      } else {
        this.addWarehouse.emit(addWarehouse);
      }
    });
    this.clearForm();
    this.buttonText = 'Lägg till';
  }

  clearForm() {
    this.city = null;
    this.cityNumber = null;
    this.clearText = null;
    this.deleteText = null;
    this.currentID = null;
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till färdigvarulager';
  }

  deleteWarehouse() {
    this.warehouseService.deleteWarehouse(this.currentID);
    this.clearForm();
  }
}
