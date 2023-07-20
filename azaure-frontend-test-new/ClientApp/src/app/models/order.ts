import { OrderDetail } from 'app/orderdetail';
import { ShipAddress } from 'app/shipaddress';

export interface Order {
  id: number;
  customerId: string;
  employeeId: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: ShipAddress;
  details: OrderDetail[];
}
