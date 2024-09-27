import { errorApiType } from "../types/types";

export const isErrorApi = (data: any): data is errorApiType => {
    return typeof data === "object" && data !== null && "message" in data
}