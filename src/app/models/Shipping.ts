import { Product } from './Product';
import { Warehouse } from './Warehouse';

export class Shipping {
  id: string;
  date: Date;
  product: Product;
  warehouse: Warehouse;
  units: number;
  arrived: boolean;
  incoming: boolean;
}
