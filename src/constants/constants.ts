import { CustomError } from '../types/types';

export const URL_SEARCH_IP: string =
  'http://ipwho.is/';

export const UNKNOWN_ERROR: CustomError = {
  name: 'Unknown error',
  message: 'Service doesn\'t work',
  code: 503,
};
