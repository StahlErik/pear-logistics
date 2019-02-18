import { Product } from './Product';
import { Warehouse } from './Warehouse';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Shipping {
  id: string;
  date: Timestamp<Date>;
  product: string;
  warehouse: string;
  units: number;
  arrived: boolean;
  incoming: boolean;
}
