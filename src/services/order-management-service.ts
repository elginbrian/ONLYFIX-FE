import api from "./api-config";
import { handleRequest } from "./handler";
import { GetOrdersResponse, GetOrderResponse, CreateOrderResponse, UpdateOrderResponse, DeleteOrderResponse, AddAttachmentResponse, AddReviewResponse } from "@/types/order-management-type";

export const getOrders = async (filters: { customer_id?: number; technician_id?: number }): Promise<GetOrdersResponse> => {
  const request = await api.get<GetOrdersResponse>("/orders", { params: filters });
  return handleRequest(request);
};

export const getOrder = async (orderId: number): Promise<GetOrderResponse> => {
  const request = await api.get<GetOrderResponse>(`/orders/${orderId}`);
  return handleRequest(request);
};

export const createOrder = async (orderData: { customer_id: number; technician_id: number; date: string; status: string; total_price: number }): Promise<CreateOrderResponse> => {
  const request = await api.post<CreateOrderResponse>("/orders", orderData);
  return handleRequest(request);
};

export const updateOrder = async (
  orderId: number,
  orderData: {
    status?: string;
    total_price?: number;
  }
): Promise<UpdateOrderResponse> => {
  const request = await api.put<UpdateOrderResponse>(`/orders/${orderId}`, orderData);
  return handleRequest(request);
};

export const deleteOrder = async (orderId: number): Promise<DeleteOrderResponse> => {
  const request = await api.delete<DeleteOrderResponse>(`/orders/${orderId}`);
  return handleRequest(request);
};

export const addOrderAttachment = async (orderId: number, attachmentData: FormData): Promise<AddAttachmentResponse> => {
  const request = await api.post<AddAttachmentResponse>(`/orders/${orderId}/attachments`, attachmentData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return handleRequest(request);
};

export const addOrderReview = async (
  orderId: number,
  reviewData: {
    technician_id: number;
    customer_id: number;
    rating: number;
    comment: string;
    review_date: string;
  }
): Promise<AddReviewResponse> => {
  const request = await api.post<AddReviewResponse>(`/orders/${orderId}/reviews`, reviewData);
  return handleRequest(request);
};
