export interface Order {
  order_id: number;
  customer_id: number;
  technician_id: number;
  date: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  total_price: number;
  created_at: string;
  updated_at: string;
}

export interface GetAllOrdersResponse {
  message: string;
  data: Order[];
}

export interface GetOrderByIdResponse {
  message: string;
  data: Order;
}

export interface CreateOrderResponse {
  message: string;
  data: Order;
}

export interface UpdateOrderResponse {
  message: string;
  data: Order;
}

export interface DeleteOrderResponse {
  message: string;
}
