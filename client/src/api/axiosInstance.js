/* eslint-disable no-unused-vars */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://server.statemall.click",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.defaults.timeout = 5000;

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
