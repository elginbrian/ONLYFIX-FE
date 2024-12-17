import { Customer } from "./customer-type";
import { Technician } from "./technician-type";

export interface Order {
  order_id: number;
  customer_id: number;
  technician_id: number;
  date: string;
  status: string;
  total_price: number;
  customer: Customer;
  technician: Technician;
  attachments: OrderAttachment[];
  reviews: Review[];
}

export interface Review {
  review_id: number;
  order_id: number;
  technician_id: number;
  customer_id: number;
  rating: number;
  comment: string;
  review_date: string;
}

export interface OrderAttachment {
  attachment_id: number;
  order_id: number;
  file_url: string;
  uploaded_at: string;
}

export interface GetOrdersResponse {
  message: string;
  data: Order[];
}

export interface GetOrderResponse {
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

export interface AddAttachmentResponse {
  message: string;
  data: OrderAttachment;
}

export interface AddReviewResponse {
  message: string;
  data: Review;
}
