// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-346b4.firebaseapp.com",
  projectId: "taskmanager-346b4",
  storageBucket: "taskmanager-346b4.appspot.com",
  messagingSenderId: "294759603737",
  appId: "1:294759603737:web:b2c94d86e53fca86e05488",
  measurementId: "G-5SV3SMCZ9H",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);

