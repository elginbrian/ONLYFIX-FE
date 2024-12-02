import { Review } from "../types/review";
import apiConfig from "./api-config";

export const createReview = async (reviewData: Review): Promise<Review> => {
  try {
    const response = await apiConfig.post<Review>("/reviews", reviewData);
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
