import { Technician } from "@/types/technician-type";
import api from "./api-config";
import { handleRequest } from "./handler";
import { GetAllTechniciansResponse, GetTechnicianByIdResponse, CreateTechnicianResponse, UpdateTechnicianResponse, DeleteTechnicianResponse } from "@/types/technician-type";

export const getAllTechnicians = async (): Promise<GetAllTechniciansResponse> => {
  const request = await api.get<GetAllTechniciansResponse>("/technicians");
  const response = handleRequest(request);
  return response;
};

export const getTechnicianById = async (technicianId: number): Promise<GetTechnicianByIdResponse> => {
  const request = await api.get<GetTechnicianByIdResponse>(`/technicians/${technicianId}`);
  const response = handleRequest(request);
  return response;
};

export const createTechnician = async (technicianData: Partial<Technician>): Promise<CreateTechnicianResponse> => {
  const request = await api.post<CreateTechnicianResponse>("/technicians", technicianData);
  const response = handleRequest(request);
  return response;
};

export const updateTechnician = async (technicianId: number, technicianData: Partial<Technician>): Promise<UpdateTechnicianResponse> => {
  const request = await api.put<UpdateTechnicianResponse>(`/technicians/${technicianId}`, technicianData);
  const response = handleRequest(request);
  return response;
};

export const deleteTechnician = async (technicianId: number): Promise<DeleteTechnicianResponse> => {
  const request = await api.delete<DeleteTechnicianResponse>(`/technicians/${technicianId}`);
  const response = handleRequest(request);
  return response;
};
