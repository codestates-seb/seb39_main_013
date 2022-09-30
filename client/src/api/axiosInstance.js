/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

/**
 * 5초 정도면 충분! => react-query retry 조정
 */
axiosInstance.defaults.timeout = 5000;

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export const authAxios = axios.create({
  headers: { "Content-Type": "application/json"},
  withCredentials: true,
});

authAxios.interceptors.response.use(
  config => console.log(config)
)


/**
 * 에러 관리시 모달?
 * react-query or interceptor 전역 에러, 로딩 관리
 * 비동기 통신 시 param 주석 사용하기!!! => 이유
 */
