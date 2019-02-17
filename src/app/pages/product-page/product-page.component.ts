import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from 'src/app/models/Product';
import { LogisticsService } from 'src/app/services/logistics.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  products: Product[];

  constructor(private logisticsService: LogisticsService) {}

  ngOnInit() {
    this.logisticsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  /* this.products = [
      { id: 1, productNumber: 'P001', title: 'jTelefon', price: 8900 },
      { id: 2, productNumber: 'P002', title: 'jPlatta', price: 5700 },
      { id: 3, productNumber: 'P003', title: 'Päronklocka', price: 11000 }
    ]; */

  addProduct(product: Product) {
    this.logisticsService.addProduct(product).subscribe(product => {
      this.products.push(product);
    });
    console.log('product list component');
    console.log(product);
  }
}
