import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Shipping } from '../models/Shipping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private readonly shippingsPath = 'shipping';
  constructor(private firestoreService: FirestoreService<Shipping>) {}

  // Get Shipping
  getShippings(): Observable<Shipping[]> {
    return this.firestoreService.list(this.shippingsPath);
  }

  // Add Shipping
  addShipping(shipping: Shipping) {
    return this.firestoreService.insert(this.shippingsPath, shipping);
  }

  getShipping(id: string): Observable<Shipping> {
    return this.firestoreService.get(this.shippingsPath, id);
  }

  editShipping(id: string, shipping: Shipping) {
    return this.firestoreService.update(this.shippingsPath, id, shipping);
  }

  deleteShipping(id: string) {
    return this.firestoreService.delete(this.shippingsPath, id);
  }
}
