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

interface userPayload {
  user_id: number;
  username: string;
  email: string;
  account_type: "technician" | "superadmin" | "customer";
  created_at: string | "not-found";
  updated_at: string | "not-found";
}

export interface AuthResponse {
  message: string;
  user?: userPayload | null;
  api_token: string | "not-found";
}

export interface RegisterUserResponse {
  data: AuthResponse;
  message?: string;
}

export interface LoginUserResponse {
  data: AuthResponse;
  message?: string;
}

export interface LogoutUserResponse {
  message: string;
}

export interface CurrentUserResponse {
  data: AuthResponse["user"];
  message?: string;
}
