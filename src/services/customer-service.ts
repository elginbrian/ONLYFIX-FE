import { Customer } from "../types/customer";
import apiConfig from "./api-config";

export const getCustomers = async (): Promise<Customer[]> => {
  try {
    const response = await apiConfig.get<Customer[]>("/customers");
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const getCustomerById = async (userId: string): Promise<Customer> => {
  try {
    const response = await apiConfig.get<Customer>(`/customers/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer by ID:", error);
    throw error;
  }
};

export const createCustomer = async (customerData: Customer): Promise<Customer> => {
  try {
    const response = await apiConfig.post<Customer>("/customers", customerData);
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

export const updateCustomer = async (userId: string, customerData: Customer): Promise<Customer> => {
  try {
    const response = await apiConfig.put<Customer>(`/customers/${userId}`, customerData);
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (userId: string): Promise<void> => {
  try {
    await apiConfig.delete(`/customers/${userId}`);
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};
