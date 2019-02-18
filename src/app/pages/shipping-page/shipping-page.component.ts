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
    /* 
    shippings.sort(function(a, b) { */
    /*  if (a.date !== null || b.date !== null) {
        console.log('a: ' + a.date + 'b: ' + b.date);
        if (a.date > b.date) {
          console.log('test' + a.date.toDate() + b.date.toDate());
        }
      } */
    /* 
      if (a.date === null) {
        return -1;
      } else if (b.date === null) {
        return -1;
      } else if (a.date === b.date) {
        console.log('what');
        return 0;
      } else {
        console.log('test');
        return a.date.toDate() < b.date.toDate() ? -1 : 1;
      }
    }); */
    /* 
    let shippingsWithoutNull: Shipping[];
    let shippingsWithNull: Shipping[];
    shippings.forEach(element => {
      if (element.date === null) {
        shippingsWithNull.push(element);
      } else {
        shippingsWithoutNull.push(element);
      }
    });
    let totalShippings: Shipping[];
    //totalShippings = shippingsWithNull + shippingsWithoutNull;
    console.log(shippingsWithNull); */
    //this.shippings = shippingsWithNull.push(shippingsWithoutNull);
    this.shippings = shippings;
  }

  /*   addSortedShippings(arr, ascending) {
    // default to ascending
    if (typeof ascending === 'undefined') ascending = true;

    var multi = ascending ? 1 : -1;

    var sorter = function(a, b) {
      if (a.date === b.date)
        // identical? return 0
        return 0;
      else if (a.date === null)
        // a is null? last
        return 1;
      else if (b.date === null)
        // b is null? last
        return -1;
      // compare, negate if descending
      else return a.date.localCompare(b.date) * multi;
    };

    return arr.sort(sorter);
  } */
  /* 
  addSortedShippings(shippings) {
    this.shippings = shippings.date.sort();
  } */

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
