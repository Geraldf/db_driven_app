import { errorText } from "./errors"

export const getErrorText = (errorCode: string): string => {
  return errorText[errorCode] || "Unknown error"
}
