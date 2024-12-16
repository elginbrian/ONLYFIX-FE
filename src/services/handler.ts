import { AxiosResponse } from "axios";

export const handleRequest = async <T>(response: AxiosResponse<T>): Promise<T> => {
  try {
    if (!response || !response.data) {
      throw new Error("(Handler) No data returned in the response.");
    }

    console.log("(Handler)Response Data:", response.data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data?.message || "An error occurred while processing the request.";
      console.error("(Handler) Axios Error:", message, error.response);
      throw new Error(message);
    } else if (error.request) {
      console.error("(Handler) Network Error:", error.request);
      throw new Error("(Handler) Network error: Unable to reach the server.");
    } else {
      console.error("(Handler) Unexpected Error:", error);
      throw new Error("(Handler) An unexpected error occurred.");
    }
  }
};
