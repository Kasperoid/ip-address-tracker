import { ipErrorType } from '../types/types';

export const isErrorIp = (error: any): error is ipErrorType =>
  'messages' && 'code' in error;
