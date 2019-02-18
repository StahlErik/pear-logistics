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
  clearText: String;
  deleteText: String;
  currentID: string;
  formTitle: string;

  constructor(private logisticsService: LogisticsService) {}

  @Input()
  set editProduct(editProduct: Product) {
    if (editProduct) {
      this.title = editProduct.title;
      this.productNumber = editProduct.productNumber;
      this.price = editProduct.price;
      this.buttonText = 'Ändra';
      this.clearText = 'Rensa';
      this.deleteText = 'Ta bort produkt';
      this.formTitle = 'Redigera produkt';
      this.currentID = editProduct.id;
    }
  }

  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  title: string;
  productNumber: string;
  price: number;

  ngOnInit() {
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till Produkt';
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
        this.logisticsService.editProduct(editProduct.id, editProduct);
      } else {
        this.addProduct.emit(addProduct);
      }
    });
    this.clearForm();
    this.buttonText = 'Lägg till';
  }

  clearForm() {
    this.title = null;
    this.productNumber = null;
    this.price = null;
    this.clearText = null;
    this.deleteText = null;
    this.currentID = null;
    this.buttonText = 'Lägg till';
    this.formTitle = 'Lägg till produkt';
  }

  deleteProduct() {
    this.logisticsService.deleteProduct(this.currentID);
    this.clearForm();
  }
}
