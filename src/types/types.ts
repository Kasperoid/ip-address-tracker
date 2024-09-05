export type ipAddressType = {
  ip: string;
  location: ipLocationType;
  domains?: string[];
  isp: string;
};

export type ipErrorType = {
  code: number;
  messages: string;
};

export type ipLocationType = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
  geonameId: number;
  postalCode: string;
};
