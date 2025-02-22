import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7xw7SaVZvaNxyLCFRurlSrHGoBq6geSE",
  authDomain: "nanny-system.firebaseapp.com",
  projectId: "nanny-system",
  storageBucket: "nanny-system.firebasestorage.app",
  messagingSenderId: "548781197632",
  appId: "1:548781197632:web:510ca761debb0c3c3292a5",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
