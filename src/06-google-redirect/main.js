// main.js
import { auth } from "../configFirebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

const btnGoogle = document.getElementById("btnGoogleRedirect");
const provider = new GoogleAuthProvider();

// Opcional: fuerza la persistencia local (para que la sesión sobreviva recargas)
await setPersistence(auth, browserLocalPersistence);

btnGoogle.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("[CLICK] iniciando redirect");
  signInWithRedirect(auth, provider);
});

// Función que ejecuta al cargar la página
(async () => {
  console.log("[BOOT] location.origin:", location.origin);
  console.log("[BOOT] auth.app.options:", auth.app.options);

  try {
    const result = await getRedirectResult(auth);
    if (result) {
      console.log("[REDIRECT RESULT] user:", result.user);
      const cred = GoogleAuthProvider.credentialFromResult(result);
      console.log("[REDIRECT RESULT] token:", cred?.accessToken);
    } else {
      console.log("[REDIRECT RESULT] No había redirect pendiente.");
    }
  } catch (err) {
    console.error("[REDIRECT RESULT] ERROR:", err);
  }
})();

// Siempre escucha cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("[AUTH STATE] Sesión activa:", user.email);
  } else {
    console.log("[AUTH STATE] Sin sesión");
  }
});
