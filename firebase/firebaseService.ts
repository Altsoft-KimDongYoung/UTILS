import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getMessaging, getToken, Messaging } from 'firebase/messaging';

import { isBrowser } from '@/utils/window';

import firebaseConfig from '../../lib/firebase';

const isReactNativeWebview = typeof window !== 'undefined' && window.ReactNativeWebView != null;

export class FirebaseService {
  private static instance: FirebaseService | null = null;

  static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }

    return FirebaseService.instance;
  }

  private firebaseApp: FirebaseApp;
  private messaging: Messaging | null;
  private fcmToken: string;

  private constructor() {
    this.firebaseApp = this.initializeFirebaseApp();
    this.messaging = this.initializeMessaging();
    this.initializeFcmToken();
    this.fcmToken = '';
  }

  private initializeFirebaseApp(): FirebaseApp {
    return !getApps().length ? initializeApp(firebaseConfig) : getApp();
  }

  private initializeMessaging(): Messaging | null {
    /** 브라우저 환경인지 확인 */
    if (!isBrowser()) {
      return null;
    }

    /** React Native WebView 환경인지 확인 */
    if (isReactNativeWebview) {
      return null;
    }

    /** Firebase 메시징 객체 반환 */
    return getMessaging(this.firebaseApp);
  }

  async initializeFcmToken() {
    if (this.messaging) {
      try {
        const token = await getToken(this.messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
        });
        this.fcmToken = token;
      } catch (error) {
        console.error('Failed to get FCM token:', error);
      }
    }
  }

  get token() {
    return this.fcmToken;
  }

  get message() {
    return this.messaging;
  }
}
