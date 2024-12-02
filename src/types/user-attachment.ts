export class UserAttachment {
  attachment_id: string;
  user_id: string;
  file_url: string;
  uploaded_at: string;

  constructor(attachment_id: string, user_id: string, file_url: string, uploaded_at: string) {
    this.attachment_id = attachment_id;
    this.user_id = user_id;
    this.file_url = file_url;
    this.uploaded_at = uploaded_at;
  }
}
