import { auth } from "../configFirebase.js";
import { getRedirectResult, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

async function handleRedirectResult() {
    try {
      const result = await getRedirectResult(auth);

  
      if (result) {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
  
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      } else{
        console.log("Nada")
      }
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  }
  
  handleRedirectResult();
  