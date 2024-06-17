import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getMessaging, getToken, Messaging } from 'firebase/messaging';

import { isBrowser } from '@/utils/window';

import firebaseConfig from '../../lib/firebase';

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
    return getApps()[0] || initializeApp(firebaseConfig);
  }

  private initializeMessaging(): Messaging | null {
    return isBrowser() ? getMessaging(this.firebaseApp) : null;
  }

  private async initializeFcmToken() {
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
