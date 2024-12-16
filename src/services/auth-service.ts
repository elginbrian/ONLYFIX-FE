import { AuthResponse, RegisterUserResponse, LoginUserResponse, LogoutUserResponse, CurrentUserResponse } from "@/types/auth-type";
import { LoginData, RegisterData } from "@/types/auth-type";
import api from "./api-config";
import { handleRequest } from "./handler";

export const registerUser = async (data: RegisterData): Promise<RegisterUserResponse> => {
  const request = await api.post<RegisterUserResponse>("/register", data);
  const response = handleRequest(request);
  return response;
};

export const loginUser = async (data: LoginData): Promise<LoginUserResponse> => {
  const request = await api.post<LoginUserResponse>("/login", data);
  const response = handleRequest(request);
  return response;
};

export const logoutUser = async (): Promise<LogoutUserResponse> => {
  const request = await api.post<LogoutUserResponse>("/logout");
  const response = handleRequest(request);
  localStorage.removeItem("token");
  return response;
};

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const request = await api.get<CurrentUserResponse>("/current-user");
  const response = handleRequest(request);
  return response;
};
