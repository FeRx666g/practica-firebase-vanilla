// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzKhUIeNghybVfygPyxJssurR7SgCptY",
  authDomain: "fir-udemy-3c69a.firebaseapp.com",
  projectId: "fir-udemy-3c69a",
  storageBucket: "fir-udemy-3c69a.firebasestorage.app",
  messagingSenderId: "614016508281",
  appId: "1:614016508281:web:83770ea024af48c9138fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Detectar local o Workstations y conectar al emulador
if (
  location.hostname === "localhost" ||
  location.hostname.includes("cloudworkstations.dev")
) {
  //connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export {auth};