import { User } from "../types/user";
import apiConfig from "./api-config";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await apiConfig.get<User[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUser = async (userData: User): Promise<User> => {
  try {
    const response = await apiConfig.post<User>("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserById = async (userId: string): Promise<User> => {
  try {
    const response = await apiConfig.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export const updateUser = async (userId: string, userData: User): Promise<User> => {
  try {
    const response = await apiConfig.put<User>(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await apiConfig.delete(`/users/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
