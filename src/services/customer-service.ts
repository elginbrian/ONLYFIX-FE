import { Customer } from "@/types/customer-type";
import api from "./api-config";
import { handleRequest } from "./handler";
import { GetAllCustomersResponse, GetCustomerByIdResponse, CreateCustomerResponse, UpdateCustomerResponse, DeleteCustomerResponse } from "@/types/customer-type";

export const getAllCustomers = async (): Promise<GetAllCustomersResponse> => {
  const request = await api.get<GetAllCustomersResponse>("/customers");
  return handleRequest(request);
};

export const getCustomerById = async (customerId: number): Promise<GetCustomerByIdResponse> => {
  const request = await api.get<GetCustomerByIdResponse>(`/customers/${customerId}`);
  return handleRequest(request);
};

export const createCustomer = async (customerData: Partial<Customer>): Promise<CreateCustomerResponse> => {
  const request = await api.post<CreateCustomerResponse>("/customers", customerData);
  return handleRequest(request);
};

export const updateCustomer = async (customerId: number, customerData: Partial<Customer>): Promise<UpdateCustomerResponse> => {
  const request = await api.put<UpdateCustomerResponse>(`/customers/${customerId}`, customerData);
  return handleRequest(request);
};

export const deleteCustomer = async (customerId: number): Promise<DeleteCustomerResponse> => {
  const request = await api.delete<DeleteCustomerResponse>(`/customers/${customerId}`);
  return handleRequest(request);
};
