// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiBaseUrl: 'http://localhost:3000/api',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx-mtGNLvWmbrtCGHhZZAS7U84nS0K-0s",
  authDomain: "pogocodes-b23f8.firebaseapp.com",
  projectId: "pogocodes-b23f8",
  storageBucket: "pogocodes-b23f8.appspot.com",
  messagingSenderId: "813878925110",
  appId: "1:813878925110:web:eb99b0d827f29706f84597",
  measurementId: "G-535SX0J0D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
