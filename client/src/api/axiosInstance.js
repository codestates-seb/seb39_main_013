/* eslint-disable no-unused-vars */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://server.statemall.tk",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.defaults.timeout = 100;

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
