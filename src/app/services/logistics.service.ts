import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {
  constructor() {}

  // Add Todo
  addProduct(product: Product): Observable<Product> {
    console.log('Serviceprovider');
    console.log(product);
    return of(product);
  }
}
