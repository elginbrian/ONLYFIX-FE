export interface Customer {
  customer_id: number;
  user_id: number;
  phone_num: string;
  address: string;
  city: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface GetAllCustomersResponse {
  message: string;
  data: Customer[];
}

export interface GetCustomerByIdResponse {
  message: string;
  data: Customer;
}

export interface CreateCustomerResponse {
  message: string;
  data: Customer;
}

export interface UpdateCustomerResponse {
  message: string;
  data: Customer;
}

export interface DeleteCustomerResponse {
  message: string;
}
