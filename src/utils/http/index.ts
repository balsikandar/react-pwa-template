import axios, { AxiosError, AxiosResponse } from 'axios';

// Set config defaults
const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// All HTTP request/response interceptor
HTTP.interceptors.response.use(
  function (successRes: AxiosResponse) {
    return successRes?.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export default HTTP;
