import { RenewRefreshTokenBody } from '@/types/common';

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
