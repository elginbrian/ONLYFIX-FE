import { GetAllUsersResponse, User } from "../types/user-type";
import api from "./api-config";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get("/users");
    return response.data || [];
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};

export const getUserById = async (userId: number): Promise<User> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data || {};
  } catch (error) {
    throw new Error(`Failed to fetch user with ID ${userId}.`);
  }
};

export const createUser = async (userData: { username: string; email: string; password: string }): Promise<User> => {
  try {
    const response = await api.post("/users", userData);
    return response.data || {};
  } catch (error) {
    throw new Error("Failed to create user.");
  }
};

export const updateUser = async (userId: number, userData: Partial<{ username: string; email: string; password?: string }>): Promise<User> => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data || {};
  } catch (error) {
    throw new Error(`Failed to update user with ID ${userId}.`);
  }
};

export const deleteUser = async (userId: number): Promise<{ message: string }> => {
  try {
    const response = await api.delete(`/users/${userId}`);
    return response.data || { message: "User deleted successfully" };
  } catch (error) {
    throw new Error(`Failed to delete user with ID ${userId}.`);
  }
};
