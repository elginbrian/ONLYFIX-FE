import { GetAllUsersResponse, GetUserByIdResponse, CreateUserResponse, UpdateUserResponse, DeleteUserResponse } from "../types/user-type";
import { User, CreateUserData, UpdateUserData } from "../types/user-type";
import api from "./api-config";
import { handleRequest } from "./handler";

export const getAllUsers = async (params?: Record<string, string | number>): Promise<GetAllUsersResponse> => {
  const request = await api.get<GetAllUsersResponse>("/users", { params });
  const response = handleRequest(request);
  return response;
};

export const getUserById = async (userId: number): Promise<GetUserByIdResponse> => {
  const request = await api.get<GetUserByIdResponse>(`/users/${userId}`);
  const response = handleRequest(request);
  return response;
};

export const createUser = async (userData: CreateUserData): Promise<CreateUserResponse> => {
  const request = await api.post<CreateUserResponse>("/users", userData);
  const response = handleRequest(request);
  return response;
};

export const updateUser = async (userId: number, userData: UpdateUserData): Promise<UpdateUserResponse> => {
  const request = await api.put<UpdateUserResponse>(`/users/${userId}`, userData);
  const response = handleRequest(request);
  return response;
};

export const deleteUser = async (userId: number): Promise<DeleteUserResponse> => {
  const request = await api.delete<DeleteUserResponse>(`/users/${userId}`);
  const response = handleRequest(request);
  return response;
};
