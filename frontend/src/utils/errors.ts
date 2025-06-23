import { HttpStatusCode } from "axios";

export interface RequestError {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

export const formatRequestError = (error: unknown): string => {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error !== null) {
    const err = error as RequestError;

    if (Array.isArray(err.message)) {
      return err.message.join("\n");
    }

    if (
      err.statusCode === HttpStatusCode.NotFound ||
      err.statusCode === HttpStatusCode.InternalServerError
    ) {
      return "smth went wrong";
    }

    if (typeof err.message === "string") {
      return err.message;
    }
  }

  return "smth went wrong";
};
