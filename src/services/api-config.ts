import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://onlyfix-backend.elginbrian.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  // (response) => response.data,
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 401:
          console.error("Unauthorized! Redirecting to login...");
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          break;
        case 403:
          console.error("Forbidden! You do not have access.");
          break;
        case 500:
          console.error("Server error! Please try again later.");
          break;
        default:
          console.error(response.statusText || "An error occurred.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout! Please try again.");
    }
    return Promise.reject(error);
  }
);

export default api;
