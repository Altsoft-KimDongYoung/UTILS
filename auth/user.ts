import { UserModel } from '@/types/common';
import { LoginResponse } from '@/types/domain';

/**
 * @Utils 로그인 성공 후 서버로부터 받은 데이터를
 * UserModel 타입으로 변환하는 함수
 */
export const createUserModelFromResponse = (
  result: LoginResponse
): UserModel => {
  const {
    id,
    loginId,
    jwt,
    refreshToken,
    localboxCreatorType,
    localboxId,
    roles,
    myTownLatiY,
    myTownLongiX,
  } = result;

  return {
    userId: id,
    loginId: loginId,
    accessToken: jwt,
    refreshToken: refreshToken,
    localboxCreatorType: localboxCreatorType,
    localboxId: localboxId,
    roles: roles,
    myTownLatiY: myTownLatiY,
    myTownLongiX: myTownLongiX,
  };
};
