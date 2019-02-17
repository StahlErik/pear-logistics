import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {
  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  title: string;
  productNumber: string;
  price: number;
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    const product = {
      title: this.title,
      productNumber: this.productNumber,
      price: this.price
    };
    this.addProduct.emit(product);
    console.log('productpage component');
    console.log(product);
  }
}
