import { createApi, type BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";

import REQUEST_METHODS from "../../constants/http-methods";
import { globalErrorToast } from "../../utils/toast";
import { axiosError } from "../../utils/axios";
import type { RequestError } from "../../utils";

const axiosBaseQuery =
  <T = unknown>(): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    T,
    { status: number; data?: unknown }
  > =>
  async ({
    url,
    method = REQUEST_METHODS.GET,
    body: data,
    params,
    headers,
  }) => {
    try {
      const res = await axios.request<T>({
        url,
        method,
        data,
        params,
        headers,
      });

      return { data: res.data };
    } catch (err) {
      const error = axiosError(err as AxiosError<RequestError>);

      if (error?.error?.status && error?.error?.data) {
        globalErrorToast(error);
      }

      return error;
    }
  };

export const baseCreateApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: "baseCreateApi",
});
