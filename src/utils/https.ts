import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "ant-design-vue";

export interface ResponseData {
  code: number;
  data?: any;
  message: string;
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 50000,
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // Some example codes here:
    // code == 0: success
    if (res.status === 200) {
      const data: ResponseData = res.data;
      if (data.code === 0) {
        return data.data;
      } else {
        message.error(data.message);
      }
    } else {
      message.error("网络错误");
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error: any) => Promise.reject(error)
);

export default service;
