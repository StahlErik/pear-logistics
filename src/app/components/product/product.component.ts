import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit(product) {
    this.editProduct.emit(product);
  }
}
