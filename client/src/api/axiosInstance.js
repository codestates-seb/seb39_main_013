import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "baseURL"
});

/**
 * 5초 정도면 충분! => react-query retry 조정
 */
axiosInstance.defaults.timeout = 5000;

axiosInstance.interceptors.request.use(

);

axiosInstance.interceptors.response.use((response) => {
    const res = response.data;
    return res;
},
    error => {
        console.log(error);
    }
);

/** 
 * 에러 관리시 모달?
 * react-query or interceptor 전역 에러, 로딩 관리
 * 비동기 통신 시 param 주석 사용하기!!! => 이유
 */
