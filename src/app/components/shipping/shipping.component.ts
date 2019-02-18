import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  @Input() shipping: Shipping;
  @Output() editShipping: EventEmitter<Shipping> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit(shipping) {
    this.editShipping.emit(shipping);
  }
}
