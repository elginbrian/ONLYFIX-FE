export interface TechniciansResponse {
  message: string;
  data: Technician[];
}

export interface Technician {
  technician_id: number;
  user_id: number;
  description: string;
  price: number;
  phone_num: string;
  city: string;
  rating: number;
  category: TechnicianCategory;
  availability: TechnicianAvailability;
  created_at: string | null;
  updated_at: string | null;
}

export type TechnicianCategory = "electrician" | "plumber" | "builder" | "carpenter";

export type TechnicianAvailability = "available" | "busy";
