import { AxiosError, isAxiosError } from 'axios';

import {
  ApiResponseFailed,
  RenewRefreshTokenBody,
  RequiredWith,
} from '@/types/common';

export const isUndefinedTypeGuard = <T>(value: T | undefined): T => {
  if (value === undefined) {
    throw new Error(`${value} is undefined`);
  }
  return value;
};

export const isRenewRefreshTokenBody = (
  body: any
): body is RenewRefreshTokenBody => {
  return (
    typeof body.userId === 'number' &&
    typeof body.refreshToken === 'string' &&
    typeof body.fcmToken === 'string'
  );
};

export const isAxiosErrorWithReturnCode = (
  error: unknown
): error is RequiredWith<AxiosError<ApiResponseFailed>, 'response'> => {
  return (
    typeof error === 'object' &&
    error !== null &&
    isAxiosError<ApiResponseFailed>(error) &&
    !!error.response &&
    !!error.response.data &&
    !!error.response.data.returnCode
  );
};