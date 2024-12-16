import { Technician, TechniciansResponse } from "@/types/technician-type";
import api from "./api-config";
import { handleRequest } from "./handler";

export const getAllTechnicians = async (): Promise<Technician[]> => {
  const request = api.get<TechniciansResponse>("/technicians");
  const response = await handleRequest(request);
  return response.data;
};

export const getTechnicianById = async (technicianId: number): Promise<Technician> => {
  const request = api.get<{ data: Technician }>(`/technicians/${technicianId}`);
  const response = await handleRequest(request);
  return response.data;
};

export const createTechnician = async (technicianData: Partial<Technician>): Promise<Technician> => {
  const request = api.post<{ data: Technician }>("/technicians", technicianData);
  const response = await handleRequest(request);
  return response.data;
};

export const updateTechnician = async (technicianId: number, technicianData: Partial<Technician>): Promise<Technician> => {
  const request = api.put<{ data: Technician }>(`/technicians/${technicianId}`, technicianData);
  const response = await handleRequest(request);
  return response.data;
};

export const deleteTechnician = async (technicianId: number): Promise<{ message: string }> => {
  const request = api.delete<{ message: string }>(`/technicians/${technicianId}`);
  const response = await handleRequest(request);
  return response;
};
