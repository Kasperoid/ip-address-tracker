export type ipAddressType = {
  ip: string;
  location: ipLocationType;
  domains?: string[];
  isp: string;
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

export type optionsCardType = {
  name: string;
  value: string;
};

export class CustomError extends Error {
  public code: number;

  constructor(message: string, code: number, name: string) {
    super(message);
    this.message = message;
    this.code = code;
    this.name = name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}