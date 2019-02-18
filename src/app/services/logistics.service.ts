import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {
  private readonly productsPath = 'products';
  constructor(private firestoreService: FirestoreService<Product>) {}

  // Get Product
  getProducts(): Observable<Product[]> {
    return this.firestoreService.list(this.productsPath);
  }

  // Add Product
  addProduct(product: Product) {
    return this.firestoreService.insert(this.productsPath, product);
  }
}
