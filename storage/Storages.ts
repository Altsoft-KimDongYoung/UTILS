import { IS_CHECKED_AUTO_LOGIN, USER_STORAGE_KEY } from '@/constants/user';
import { UserModel } from '@/types/common';

export class Storages {
  private key;

  constructor() {
    this.key = USER_STORAGE_KEY;
  }

  // 로그인 유지 여부 체크
  private static isCheckedAutoLogin() {
    return !!localStorage.getItem(IS_CHECKED_AUTO_LOGIN);
  }

  // 로그인 유지 여부에 따라 저장소 타입 반환
  private static getSelectedStorage() {
    return Storages.isCheckedAutoLogin() ? localStorage : sessionStorage;
  }

  // 서버 여부 체크
  static isServer() {
    return typeof window === 'undefined';
  }

  // 유저정보 저장
  static setUser(user: UserModel) {
    if (!Storages.isServer()) {
      Storages.getSelectedStorage().setItem(USER_STORAGE_KEY, JSON.stringify(user));
    }
  }

  // 유저정보 불러오기
  static getUser() {
    if (!Storages.isServer()) {
      const user = Storages.getSelectedStorage().getItem(USER_STORAGE_KEY);

      return user ? JSON.parse(user) : null;
    }

    return null;
  }

  // 유저정보 삭제
  static removeUser() {
    if (!Storages.isServer()) {
      Storages.getSelectedStorage().removeItem(USER_STORAGE_KEY);
    }
  }
}

export default Storages;
