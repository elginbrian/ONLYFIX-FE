import { AuthResponse, LoginData, RegisterData } from "@/types/auth-type";
import api from "./api-config";
import { handleRequest } from "./handler";

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
  const request = api.post<AuthResponse>("/register", data);
  const response = await handleRequest(request);
  return response;
};

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  const request = api.post<AuthResponse>("/login", data);
  const response = await handleRequest(request);
  return response;
};

export const logoutUser = async (): Promise<string> => {
  const request = api.post<{ message: string }>("/logout");
  const response = await handleRequest(request);
  localStorage.removeItem("token");
  return response.message;
};

export const getCurrentUser = async (): Promise<AuthResponse["user"]> => {
  const request = api.get<AuthResponse>("/current-user");
  const response = await handleRequest(request);
  return response.user;
};
