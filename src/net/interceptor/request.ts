import type { AxiosRequestConfig, AxiosError } from "axios";

export const onRequestFulfilled = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  return config;
};

export const onRequestRejected = (error: AxiosError): Promise<void> => {
  return Promise.reject(error);
};
