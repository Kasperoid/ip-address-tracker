import { ipAddressType, ipErrorType } from '../types/types';

export const localIpObj: ipAddressType = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.40599,
    lng: -122.078514,
    timezone: '-07:00',
    geonameId: 5375481,
    postalCode: '12312',
  },
  domains: [
    '0d2.net',
    '003725.com',
    '0f6.b0094c.cn',
    '007515.com',
    '0guhi.jocose.cn',
  ],
  isp: 'Google LLC',
};

export const URL_SEARCH_IP: string =
  'https://geo.ipify.org/api/v2/country,city';

export const API_KEY: string = 'at_k3xMYfAXP0Nqbo84wvtX80BKrXuTv';

export const UNKNOWN_ERROR: ipErrorType = {
  messages: 'Service Unavailable',
  code: 503,
};
