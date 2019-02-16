import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = [
      { id: 1, productNumber: 'P001', title: 'jTelefon', price: 8900 },
      { id: 2, productNumber: 'P002', title: 'jPlatta', price: 5700 },
      { id: 3, productNumber: 'P003', title: 'Päronklocka', price: 11000 }
    ];
  }
}
