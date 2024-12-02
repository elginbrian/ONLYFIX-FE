import { Order } from "../types/order";
import { OrderAttachment } from "../types/order-attachment";
import apiConfig from "./api-config";

export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await apiConfig.get<Order[]>("/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const createOrder = async (orderData: Order): Promise<Order> => {
  try {
    const response = await apiConfig.post<Order>("/orders", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  try {
    const response = await apiConfig.get<Order>(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw error;
  }
};

export const updateOrder = async (orderId: string, orderData: Order): Promise<Order> => {
  try {
    const response = await apiConfig.put<Order>(`/orders/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

export const deleteOrder = async (orderId: string): Promise<void> => {
  try {
    await apiConfig.delete(`/orders/${orderId}`);
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};

export const createOrderAttachment = async (attachmentData: OrderAttachment): Promise<OrderAttachment> => {
  try {
    const response = await apiConfig.post<OrderAttachment>("/order-attachments", attachmentData);
    return response.data;
  } catch (error) {
    console.error("Error creating order attachment:", error);
    throw error;
  }
};
