import { auth } from "../configFirebase.js";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const btnGoogle = document.querySelector("#btnGoogleRedirect");
const provider = new GoogleAuthProvider();

btnGoogle.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("Evento Click Google");
  await signInWithRedirect(auth, provider);
});
