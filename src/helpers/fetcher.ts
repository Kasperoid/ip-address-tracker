import axios from 'axios';
import { API_KEY, UNKNOWN_ERROR, URL_SEARCH_IP } from '../constants/constants';
import { createError } from './createError';
import { ipAddressType, ipErrorType } from '../types/types';

export const fetcher = async (searchIp: string): Promise<ipAddressType> => {
  try {
    const resp = await axios(URL_SEARCH_IP, {
      params: {
        apiKey: API_KEY,
        ipAddress: searchIp,
      },
    });
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        const resultError = createError(
          error.response.data.messages,
          error.response.data.code
        );
        throw resultError;
      } else {
        const resultError = createError(
          UNKNOWN_ERROR.messages,
          UNKNOWN_ERROR.code
        );
        throw resultError;
      }
    } else {
      const resultError = createError(
        UNKNOWN_ERROR.messages,
        UNKNOWN_ERROR.code
      );
      throw resultError;
    }
  }
};
