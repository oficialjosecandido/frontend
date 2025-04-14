import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDSByF3MQO0jeVHlczfwoMJmZjnUw6x10s",
      authDomain: "xero-af807.firebaseapp.com",
      projectId: "xero-af807",
      storageBucket: "xero-af807.firebasestorage.app",
      messagingSenderId: "477401100632",
      appId: "1:477401100632:web:98335b67c328b3dbac752d",
      measurementId: "G-P3KH213JTD"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
  
  ]
};
