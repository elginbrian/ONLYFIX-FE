import { User } from "@/types/user-type";
import api from "./api-config";
import { handleRequest } from "./handler";
import { GetProfileResponse, UpdateProfileResponse } from "@/types/profile-type";

export const getProfile = async (userId: number): Promise<GetProfileResponse> => {
  const request = await api.get<GetProfileResponse>(`/profiles/${userId}`);
  return handleRequest(request);
};

export const updateProfile = async (userId: number, profileData: Partial<User>): Promise<UpdateProfileResponse> => {
  const request = await api.put<UpdateProfileResponse>(`/profiles/${userId}`, profileData);
  return handleRequest(request);
};
