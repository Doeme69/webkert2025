import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({ 
        projectId: "webkertropi",
        appId: "1:731566050483:web:148913ca5a2a334a9574c6",
        storageBucket: "webkertropi.firebasestorage.app",
        apiKey: "AIzaSyCfR5wKFe_-JGbCo_-CajrBhS0DQLZww7s",
        authDomain: "webkertropi.firebaseapp.com",
        messagingSenderId: "731566050483"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage())]
};
