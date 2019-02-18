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

  getProduct(id: string): Observable<Product> {
    return this.firestoreService.get(this.productsPath, id);
  }

  editProduct(id: string, product: Product) {
    return this.firestoreService.update(this.productsPath, id, product);
  }

  /*   editProduct(product: Product): Observable<Product> {
    return product;
  } */
}
