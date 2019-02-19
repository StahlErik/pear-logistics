import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingBalanceComponent } from './shipping-balance.component';

describe('ShippingBalanceComponent', () => {
  let component: ShippingBalanceComponent;
  let fixture: ComponentFixture<ShippingBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
