export interface Review {
  review_id: number;
  order_id: number;
  technician_id: number;
  customer_id: number;
  rating: number;
  comment: string | null;
  review_date: string;
}

export interface GetReviewsResponse {
  message: string;
  data: Review[];
}

export interface GetReviewResponse {
  message: string;
  data: Review;
}

export interface CreateReviewResponse {
  message: string;
  data: Review;
}

export interface UpdateReviewResponse {
  message: string;
  data: Review;
}

export interface DeleteReviewResponse {
  message: string;
}
