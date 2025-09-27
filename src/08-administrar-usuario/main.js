import { auth } from "../configFirebase";
import { onAuthStateChanged } from "firebase/auth";

console.log("👉 currentUser al cargar:", auth.currentUser);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ onAuthStateChanged detectó sesión:", user.email);
    console.log("👉 currentUser despues de cargar:", auth.currentUser);
  } else {
    console.log("❌ onAuthStateChanged detectó: No hay sesión");
  }
});
