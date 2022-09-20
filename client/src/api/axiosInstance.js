import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "baseURL"
});

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