import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { LogisticsService } from '../../services/logistics.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {
  buttonText: String;
  currentID: string;

  constructor(private logisticsService: LogisticsService) {}

  @Input()
  set editProduct(editProduct: Product) {
    if (editProduct) {
      this.title = editProduct.title;
      this.productNumber = editProduct.productNumber;
      this.price = editProduct.price;
      this.buttonText = 'Ändra';
      this.currentID = editProduct.id;
    }
  }

  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  title: string;
  productNumber: string;
  price: number;

  ngOnInit() {
    this.buttonText = 'Lägg till';
  }

  onSubmit() {
    const addProduct = {
      title: this.title,
      productNumber: this.productNumber,
      price: this.price
    };
    const editProduct = {
      title: this.title,
      productNumber: this.productNumber,
      price: this.price,
      id: this.currentID
    };
    this.logisticsService.getProduct(this.currentID).subscribe(res => {
      if (res) {
        this.logisticsService.editProduct(this.currentID, editProduct);
      } else {
        this.addProduct.emit(addProduct);
      }
    });
    this.clearForm();
    this.buttonText = 'Lägg till';
  }

  clearForm() {
    this.title = '';
    this.productNumber = '';
    this.price = null;
  }
}
