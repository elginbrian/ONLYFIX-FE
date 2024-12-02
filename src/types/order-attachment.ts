export class OrderAttachment {
  attachment_id: string;
  order_id: string;
  file_url: string;
  uploaded_at: string;

  constructor(attachment_id: string, order_id: string, file_url: string, uploaded_at: string) {
    this.attachment_id = attachment_id;
    this.order_id = order_id;
    this.file_url = file_url;
    this.uploaded_at = uploaded_at;
  }
}
