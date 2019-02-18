import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingListComponent } from './shipping-list.component';

describe('ShippingListComponent', () => {
  let component: ShippingListComponent;
  let fixture: ComponentFixture<ShippingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
