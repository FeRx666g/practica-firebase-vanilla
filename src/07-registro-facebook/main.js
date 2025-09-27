import { auth } from "../configFirebase";
import {  OAuthProvider, signInWithPopup } from "firebase/auth";

const loginFacebook = document.querySelector("#loginFacebook");
const provider = new OAuthProvider('microsoft.com');

loginFacebook.addEventListener("click", async () => {

    try {
        const login = await signInWithPopup(auth, provider);

        console.log("Resultado: ", login);

    } catch (error) {
        console.log(error);
    }

});