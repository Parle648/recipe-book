import axios, { AxiosError } from "axios";
import type { RequestError } from "./errors";

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

export const axiosError = (
  err: AxiosError<RequestError>
): { error: { status: number; data: RequestError } } => ({
  error: {
    status: err.response?.status ?? 500,
    data:
      err.response?.data ??
      ({
        message: "An unexpected error occurred",
        error: "UnknownError",
        statusCode: 500,
      } as RequestError),
  },
});

export default instance;
