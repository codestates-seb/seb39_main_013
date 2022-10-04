/* eslint-disable no-unused-vars */
import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://server.statemall.tk",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.defaults.timeout = 5000;

axiosInstance.interceptors.response.use((response) => {
  return response;
});



