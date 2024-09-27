import { ipAddressType } from "../types/types";

export const isIpData = (data: any): data is ipAddressType => {
    return typeof data === "object" && data !== null && "location" in data
}