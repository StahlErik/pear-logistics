import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() editProduct2: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  editProduct(product: Product) {
    this.editProduct2.emit(product);
  }
}
