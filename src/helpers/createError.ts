import { CustomError } from "../types/types";

export const createError = (message: string, code: number, name: string) => {
  const error = new CustomError(message, code, name);
  return error;
};
