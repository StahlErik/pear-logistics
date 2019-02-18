import { Component, OnInit } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.scss']
})
export class ShippingPageComponent implements OnInit {
  shippings: Shipping[];
  editShipping: Shipping;

  constructor(private shippingService: ShippingService) {}

  addSortedShippings(shippings) {
    shippings.sort(function(a, b) {
      return a.units - b.units;
    });
    this.shippings = shippings;
  }

  ngOnInit() {
    this.shippingService.getShippings().subscribe(shippings => {
      this.addSortedShippings(shippings);
    });
  }

  addShipping(shipping: Shipping) {
    this.shippingService.addShipping(shipping);
    this.shippingService.getShippings().subscribe(shippings => {
      this.addSortedShippings(shippings);
    });
  }

  editShipping2(shipping: Shipping) {
    this.editShipping = shipping;
  }
}
