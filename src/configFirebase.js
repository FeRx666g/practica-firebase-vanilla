import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzKhUIeNghybVfygPyxJssurR7SgCptY",
  authDomain: "fir-udemy-3c69a.firebaseapp.com",
  projectId: "fir-udemy-3c69a",
  storageBucket: "fir-udemy-3c69a.appspot.com",
  messagingSenderId: "614016508281",
  appId: "1:614016508281:web:83770ea024af48c9138fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);