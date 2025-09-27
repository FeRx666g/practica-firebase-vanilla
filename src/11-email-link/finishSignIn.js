import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../configFirebase";


if (isSignInWithEmailLink(auth, window.location.href)){
    let email = window.localStorage.getItem("emailForSignIn");
    try{

        const result = await signInWithEmailLink(auth, email, window.location.href);
        console.log(`Usuario autenticado: ${result.user.displayName}. Email: ${result.user.email}`);

    }catch(error){
        console.log(error);
    }
}