export const createError = (messages: string, code: number) => {
  const error = new Error(messages);
  error.name = code.toString();
  return error;
};
