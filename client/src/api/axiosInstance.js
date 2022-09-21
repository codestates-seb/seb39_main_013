import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "baseURL"
});

/**
 * 시간을 정하는게 맞는지 찾아보기
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
)