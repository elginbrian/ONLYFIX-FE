export interface User {
  user_id: number;
  username: string;
  email: string;
  account_type: "technician" | "superadmin" | "customer";
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  api_token: string | null;
}

export interface GetAllUsersResponse {
  message: string;
  data: User[];
}
