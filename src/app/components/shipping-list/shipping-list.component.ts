import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.scss']
})
export class ShippingListComponent implements OnInit {
  @Input() shippings: Shipping[];
  @Output() editShipping2: EventEmitter<Shipping> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  editShipping(shipping: Shipping) {
    this.editShipping2.emit(shipping);
  }
}
