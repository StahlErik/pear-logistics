import { Injectable } from '@angular/core';
import { Warehouse } from '../models/Warehouse';
import { FirestoreService } from './firestore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private readonly productsPath = 'warehouses';
  constructor(private firestoreService: FirestoreService<Warehouse>) {}

  // Get Warehouses
  getWarehouses(): Observable<Warehouse[]> {
    return this.firestoreService.list(this.productsPath);
  }

  // Add Warehouse
  addWarehouse(warehouse: Warehouse) {
    return this.firestoreService.insert(this.productsPath, warehouse);
  }

  //Get Warehouse
  getWarehouse(id: string): Observable<Warehouse> {
    return this.firestoreService.get(this.productsPath, id);
  }

  editWarehouse(id: string, warehouse: Warehouse) {
    return this.firestoreService.update(this.productsPath, id, warehouse);
  }

  deleteWarehouse(id: string) {
    return this.firestoreService.delete(this.productsPath, id);
  }
}
