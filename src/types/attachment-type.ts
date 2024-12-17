export type UserAttachment = {
  user_id: number;
  file_url: string;
  uploaded_at: string;
};

export type OrderAttachment = {
  order_id: number;
  file_url: string;
  uploaded_at: string;
};

export type GetUserAttachmentsResponse = {
  message: string;
  data: UserAttachment[];
};

export type GetOrderAttachmentsResponse = {
  message: string;
  data: OrderAttachment[];
};

export type StoreUserAttachmentResponse = {
  message: string;
  data: UserAttachment;
};

export type StoreOrderAttachmentResponse = {
  message: string;
  data: OrderAttachment;
};
