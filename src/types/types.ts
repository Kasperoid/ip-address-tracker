export type ipAddressType = {
  ip: string;
  success: boolean;
  country_code?: string;
  region?: string;
  city?: string;
  latitude?: number,
  longitude?: number,
  connection?: ipConnectionType,
  timezone?: {
    utc: string;
  }
};

export type ipConnectionType = {
  isp?: string;
}

export type optionsCardType = {
  name: string;
  value: string;
}

export type errorApiType = {
  ip: string;
  message: string;
  success: boolean;
}

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