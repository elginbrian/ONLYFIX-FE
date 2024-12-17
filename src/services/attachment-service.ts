import api from "./api-config";
import { handleRequest } from "./handler";
import { GetUserAttachmentsResponse, GetOrderAttachmentsResponse, StoreUserAttachmentResponse, StoreOrderAttachmentResponse } from "@/types/attachment-type";

export const getUserAttachments = async (userId: number): Promise<GetUserAttachmentsResponse> => {
  const request = await api.get<GetUserAttachmentsResponse>(`/attachments/user/${userId}`);
  return handleRequest(request);
};

export const getOrderAttachments = async (orderId: number): Promise<GetOrderAttachmentsResponse> => {
  const request = await api.get<GetOrderAttachmentsResponse>(`/attachments/order/${orderId}`);
  return handleRequest(request);
};

export const storeUserAttachment = async (userId: number, formData: FormData): Promise<StoreUserAttachmentResponse> => {
  const request = await api.post<StoreUserAttachmentResponse>(`/attachments/user/${userId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return handleRequest(request);
};

export const storeOrderAttachment = async (orderId: number, formData: FormData): Promise<StoreOrderAttachmentResponse> => {
  const request = await api.post<StoreOrderAttachmentResponse>(`/attachments/order/${orderId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return handleRequest(request);
};
