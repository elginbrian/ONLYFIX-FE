import api from "./api-config"; // Axios instance
import { GetAllUsersResponse, User } from "../types/user-type";

const userService = {
  getAllUsers: async (): Promise<GetAllUsersResponse> => {
    const response = await api.get<GetAllUsersResponse>("/users");
    return response.data;
  },

  getUserById: async (userId: number): Promise<{ message: string; data: User }> => {
    const response = await api.get<{ message: string; data: User }>(`/users/${userId}`);
    return response.data;
  },

  createUser: async (userData: { username: string; email: string; password: string }): Promise<{ message: string; data: User }> => {
    const response = await api.post<{ message: string; data: User }>("/users", userData);
    return response.data;
  },

  updateUser: async (userId: number, userData: Partial<{ username: string; email: string; password?: string }>): Promise<{ message: string; data: User }> => {
    const response = await api.put<{ message: string; data: User }>(`/users/${userId}`, userData);
    return response.data;
  },

  deleteUser: async (userId: number): Promise<{ message: string }> => {
    const response = await api.delete<{ message: string }>(`/users/${userId}`);
    return response.data;
  },
};

export default userService;
