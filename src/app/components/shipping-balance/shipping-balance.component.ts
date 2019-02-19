import { Component, OnInit, Input } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { ProductCount } from 'src/app/models/ProductCount';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'app-shipping-balance',
  templateUrl: './shipping-balance.component.html',
  styleUrls: ['./shipping-balance.component.scss']
})
export class ShippingBalanceComponent implements OnInit {
  @Input() summedShippings: Shipping[];

  constructor(private shippingService: ShippingService) {}

  ngOnInit() {}
}
