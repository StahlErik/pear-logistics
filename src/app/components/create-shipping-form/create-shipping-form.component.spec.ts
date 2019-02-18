import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShippingFormComponent } from './create-shipping-form.component';

describe('CreateShippingFormComponent', () => {
  let component: CreateShippingFormComponent;
  let fixture: ComponentFixture<CreateShippingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShippingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
