export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  message: string;
  user?: {
    user_id: number;
    username: string;
    email: string;
    account_type: "technician" | "superadmin" | "customer";
    email_verified_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    api_token: string | null;
  };
}
