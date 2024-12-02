import axios from "axios";

const apiConfig = axios.create({
  baseURL: "https://onlyfix-be.up.railway.app/",
  headers: { "Content-Type": "application/json" },
});

apiConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiConfig;
