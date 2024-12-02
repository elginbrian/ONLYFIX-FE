import { Technician } from "../types/technician";
import apiConfig from "./api-config";

export const getTechnicians = async (): Promise<Technician[]> => {
  try {
    const response = await apiConfig.get<Technician[]>("/technicians");
    return response.data;
  } catch (error) {
    console.error("Error fetching technicians:", error);
    throw error;
  }
};

export const getTechnicianById = async (userId: string): Promise<Technician> => {
  try {
    const response = await apiConfig.get<Technician>(`/technicians/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching technician by ID:", error);
    throw error;
  }
};

export const createTechnician = async (technicianData: Technician): Promise<Technician> => {
  try {
    const response = await apiConfig.post<Technician>("/technicians", technicianData);
    return response.data;
  } catch (error) {
    console.error("Error creating technician:", error);
    throw error;
  }
};

export const updateTechnician = async (userId: string, technicianData: Technician): Promise<Technician> => {
  try {
    const response = await apiConfig.put<Technician>(`/technicians/${userId}`, technicianData);
    return response.data;
  } catch (error) {
    console.error("Error updating technician:", error);
    throw error;
  }
};

export const deleteTechnician = async (userId: string): Promise<void> => {
  try {
    await apiConfig.delete(`/technicians/${userId}`);
  } catch (error) {
    console.error("Error deleting technician:", error);
    throw error;
  }
};
