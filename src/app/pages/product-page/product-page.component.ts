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

  addSortedProducts(products) {
    products.sort(function(a, b) {
      if (a.productNumber < b.productNumber) {
        return -1;
      }
      if (a.productNumber > b.productNumber) {
        return 1;
      }
      return 0;
    });
    this.products = products;
  }

  ngOnInit() {
    this.logisticsService.getProducts().subscribe(products => {
      this.addSortedProducts(products);
    });
  }

  addProduct(product: Product) {
    this.logisticsService.addProduct(product);
    this.logisticsService.getProducts().subscribe(products => {
      this.addSortedProducts(products);
    });
  }
}
