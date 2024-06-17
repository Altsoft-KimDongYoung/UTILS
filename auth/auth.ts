import { IS_CHECKED_AUTO_LOGIN } from '@/constants/user';
import type { UserModel } from '@/types/common';
import { Storages } from '@/utils/storage';

export type UserCB = (user: UserModel | null) => void;

/** @Utils 인증, 토큰 관련 유틸 클래스 */
export class Auth {
  private static instance: Auth | null = null;

  static getInstance(): Auth {
    if (!Auth.instance) {
      Auth.instance = new Auth();
    }

    return Auth.instance;
  }

  private user: UserModel | null;

  private cb: UserCB | null;

  private constructor() {
    this.user = null;
    this.cb = null;
  }

  // 사용자 데이터 변경
  private setUser(user: UserModel) {
    this.user = user;
  }

  // 사용자 데이터 변경시 호출되는 콜백 함수
  private onUserChange(user: UserModel | null) {
    if (this.cb) {
      this.cb(user);
    }
  }

  get isAuth() {
    return !!this.user?.accessToken;
  }

  get accessToken() {
    return this.user?.accessToken;
  }

  get refreshToken() {
    return this.user?.refreshToken;
  }

  get userId() {
    return this.user?.userId;
  }

  get localboxId() {
    return this.user?.localboxId;
  }

  get loginId() {
    return this.user?.loginId;
  }

  get roles() {
    return this.user?.roles;
  }

  get myTownLatiY() {
    return this.user?.myTownLatiY;
  }

  get myTownLongiX() {
    return this.user?.myTownLongiX;
  }

  get currentTownName() {
    return this.user?.currentTownName;
  }

  get currentLongiX() {
    return this.user?.currentLongiX;
  }

  get currentLatiY() {
    return this.user?.currentLatiY;
  }

  get localboxCreatorType() {
    return this.user?.localboxCreatorType;
  }

  /**
   * 1. 스토리지에 사용자 정보 저장
   * 2. 사용자 데이터 변경 콜백함수 실행
   */
  signIn(user: UserModel, isCheckedAutoLogin: boolean = false) {
    isCheckedAutoLogin && localStorage.setItem(IS_CHECKED_AUTO_LOGIN, 'true');
    Storages.setUser(user);
    this.onUserChange(user);
    this.resolveUser();
  }

  /**
   * 1. 스토리지에 저장된 사용자 정보 제거
   * 2. 사용자 데이터 변경 콜백함수 실행
   */
  signOut() {
    Storages.removeUser();
    localStorage.removeItem(IS_CHECKED_AUTO_LOGIN);
    this.onUserChange(null);
    this.user = null;
  }

  // AccessToken, RefreshToken 갱신
  renewToken(accessToken: string, refreshToken: string) {
    if (this.user) {
      const newUser = { ...this.user, accessToken, refreshToken };
      Storages.setUser(newUser);
      this.setUser(newUser as UserModel);
    }
  }

  // 스토리지에 저장된 정보가 있다면 동기화(setUser))
  resolveUser() {
    if (window) {
      const signedInUser = Storages.getUser();

      if (signedInUser) {
        this.setUser(signedInUser);
      }
    }

    return this;
  }

  // 사용자 정보 변경 콜백 등록
  onAuthStateChanged(cb: UserCB) {
    this.cb = cb;
    this.onUserChange(this.user);

    return () => {
      this.cb = null;
    };
  }

  // 사용자 동네 설정
  setChangeMyTown(myTownLongiY: number, myTownLatiX: number) {
    if (this.user) {
      const newUser = { ...this.user, myTownLongiY, myTownLatiX };
      Storages.setUser(newUser);
      this.setUser(newUser as UserModel);
      this.onUserChange(newUser);
    }
  }

  // 사용자 현재 위치 설정
  setChangeCurrentPosition(currentLongiY: number, currentLatiX: number) {
    if (this.user) {
      const newUser = { ...this.user, currentLongiY, currentLatiX };
      Storages.setUser(newUser);
      this.setUser(newUser as UserModel);
      this.onUserChange(newUser);
    }
  }

  // 사용자 동네 areaName 설정
  setChangeCurrentTownName(currentTownName: string) {
    if (this.user) {
      const newUser = { ...this.user, currentTownName };
      Storages.setUser(newUser);
      this.setUser(newUser as UserModel);
      this.onUserChange(newUser);
    }
  }
}
