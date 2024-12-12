import { GetAllUsersResponse, User, CreateUserData, UpdateUserData } from "../types/user-type";
import api from "./api-config";
import { handleRequest } from "./handler";

export const getAllUsers = async (params?: Record<string, string | number>): Promise<User[]> => {
  const request = api.get<GetAllUsersResponse>("/users", { params });
  const response = await handleRequest(request);
  return response.data;
};

export const getUserById = async (userId: number): Promise<User> => {
  const request = api.get<{ data: User }>(`/users/${userId}`);
  const response = await handleRequest(request);
  return response.data;
};

export const createUser = async (userData: CreateUserData): Promise<User> => {
  const request = api.post<{ data: User }>("/users", userData);
  const response = await handleRequest(request);
  return response.data;
};

export const updateUser = async (userId: number, userData: UpdateUserData): Promise<User> => {
  const request = api.put<{ data: User }>(`/users/${userId}`, userData);
  const response = await handleRequest(request);
  return response.data;
};

export const deleteUser = async (userId: number): Promise<{ message: string }> => {
  const request = api.delete<{ message: string }>(`/users/${userId}`);
  const response = await handleRequest(request);
  return response;
};
