import { OrderStatus } from "./enum";

export class Order {
  order_id: string;
  customer_id: string;
  technician_id: string;
  date: string;
  status: OrderStatus;
  total_price: number;

  constructor(order_id: string, customer_id: string, technician_id: string, date: string, status: OrderStatus, total_price: number) {
    this.order_id = order_id;
    this.customer_id = customer_id;
    this.technician_id = technician_id;
    this.date = date;
    this.status = status;
    this.total_price = total_price;
  }
}
