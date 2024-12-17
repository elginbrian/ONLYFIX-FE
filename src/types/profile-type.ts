export type User = {
  user_id: number;
  username: string;
  email: string;
  account_type: "customer" | "technician";
  phone_num?: string;
  address?: string;
  city?: string;
  price?: number;
  description?: string;
  rating?: number;
  created_at: string | null;
  updated_at: string | null;
  technician?: Technician;
  customer?: Customer;
};

export type Technician = {
  description: string;
  price: number;
  phone_num: string;
  city: string;
  rating: number;
};

export type Customer = {
  phone_num: string;
  address: string;
  city: string;
};

export type GetProfileResponse = {
  message: string;
  data: {
    user: User;
  };
};

export type UpdateProfileResponse = {
  message: string;
  data: User;
};
