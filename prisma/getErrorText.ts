import { getErrorMessageByCode } from "./errors"

export const getErrorText = (errorCode: string): string => {
  return getErrorMessageByCode(errorCode)
}
