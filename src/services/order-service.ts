import { Order } from "@/types/order-type";
import api from "./api-config";
import { handleRequest } from "./handler";
import { GetAllOrdersResponse, GetOrderByIdResponse, CreateOrderResponse, UpdateOrderResponse, DeleteOrderResponse } from "@/types/order-type";

export const getAllOrders = async (): Promise<GetAllOrdersResponse> => {
  const request = await api.get<GetAllOrdersResponse>("/orders");
  return handleRequest(request);
};

export const getOrderById = async (orderId: number): Promise<GetOrderByIdResponse> => {
  const request = await api.get<GetOrderByIdResponse>(`/orders/${orderId}`);
  return handleRequest(request);
};

export const createOrder = async (orderData: Partial<Order>): Promise<CreateOrderResponse> => {
  const request = await api.post<CreateOrderResponse>("/orders", orderData);
  return handleRequest(request);
};

export const updateOrder = async (orderId: number, orderData: Partial<Order>): Promise<UpdateOrderResponse> => {
  const request = await api.put<UpdateOrderResponse>(`/orders/${orderId}`, orderData);
  return handleRequest(request);
};

export const deleteOrder = async (orderId: number): Promise<DeleteOrderResponse> => {
  const request = await api.delete<DeleteOrderResponse>(`/orders/${orderId}`);
  return handleRequest(request);
};
