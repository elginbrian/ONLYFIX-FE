export interface User {
  user_id: number;
  username: string;
  email: string;
  account_type: "technician" | "superadmin" | "customer";
  created_at: string | null;
  updated_at: string | null;
}

export interface GetAllUsersResponse {
  message: string;
  data: User[];
}

export interface GetUserByIdResponse {
  data: User;
  message?: string;
}

export interface CreateUserResponse {
  data: User;
  message?: string;
}

export interface UpdateUserResponse {
  data: User;
  message?: string;
}

export interface DeleteUserResponse {
  message: string;
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  account_type: "technician" | "superadmin" | "customer";
}

export type UpdateUserData = Partial<Pick<User, "username" | "email" | "account_type">>;
