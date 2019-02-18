import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarehouseFormComponent } from './create-warehouse-form.component';

describe('CreateWarehouseFormComponent', () => {
  let component: CreateWarehouseFormComponent;
  let fixture: ComponentFixture<CreateWarehouseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWarehouseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWarehouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
