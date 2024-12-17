import api from "./api-config";
import { handleRequest } from "./handler";
import { Review } from "@/types/review-type";
import { GetReviewsResponse, GetReviewResponse, CreateReviewResponse, UpdateReviewResponse, DeleteReviewResponse } from "@/types/review-type";

export const getReviews = async (): Promise<GetReviewsResponse> => {
  const request = await api.get<GetReviewsResponse>("/reviews");
  return handleRequest(request);
};

export const getReview = async (reviewId: number): Promise<GetReviewResponse> => {
  const request = await api.get<GetReviewResponse>(`/reviews/${reviewId}`);
  return handleRequest(request);
};

export const createReview = async (reviewData: { order_id: number; technician_id: number; customer_id: number; rating: number; comment?: string }): Promise<CreateReviewResponse> => {
  const request = await api.post<CreateReviewResponse>("/reviews", reviewData);
  return handleRequest(request);
};

export const updateReview = async (
  reviewId: number,
  reviewData: {
    rating?: number;
    comment?: string;
  }
): Promise<UpdateReviewResponse> => {
  const request = await api.put<UpdateReviewResponse>(`/reviews/${reviewId}`, reviewData);
  return handleRequest(request);
};

export const deleteReview = async (reviewId: number): Promise<DeleteReviewResponse> => {
  const request = await api.delete<DeleteReviewResponse>(`/reviews/${reviewId}`);
  return handleRequest(request);
};
