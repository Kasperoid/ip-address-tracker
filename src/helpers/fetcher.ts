import axios from 'axios';
import { ipAddressType } from '../types/types';
import { isErrorApi } from './typeGuard';
import { createError } from './createError';
import { UNKNOWN_ERROR } from '../constants/constants';

export const fetcher = async (
  url: string,
  { arg }: { arg: string }
): Promise<ipAddressType | undefined> => {
  const resp = await axios(`${url}/${arg}`);
  if (!resp.data.success) {
    let error;
    if (isErrorApi(resp.data)) {
      error = createError(resp.data.message, 402, 'Error');
    } else {
      error = createError(
        UNKNOWN_ERROR.message,
        UNKNOWN_ERROR.code,
        UNKNOWN_ERROR.name
      );
    }
    throw error;
  }
  return resp.data;
};
