import axios from 'axios';
import { API_KEY, UNKNOWN_ERROR } from '../constants/constants';
import { createError } from './createError';
import { ipAddressType } from '../types/types';

export const fetcher = async (url: string, inputStr: string): Promise<ipAddressType | undefined> => {
  const res = await fetch(`${url}?apiKey=${API_KEY}&ipAddress=${inputStr}`);
  if (!res.ok) {
    throw new Error('Ошибка запроса');
  }
  return await res.json();
  // try {
  //   const resp = await axios(url, {
  //     params: {
  //       apiKey: API_KEY,
  //       ipAddress: inputStr,
  //     },
  //   });
  //   return resp.data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     if (error.response) {
  //       throw new Error(error.response.data)
  //     }
  //     throw new Error(error.message)
  //   }
  // };
}
