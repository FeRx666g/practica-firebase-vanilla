import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../configFirebase";

console.log("Email Link");

const formEmail = document.querySelector("#formEmailLink");

formEmail.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(`Submit enviado. Correo: ${e.target.email.value}`);
    const email = e.target.email.value;

    const actionCodeSettings = {
        url: "https://5173-firebase-firebase-basico-1758037132346.cluster-gizzoza7hzhfyxzo5d76y3flkw.cloudworkstations.dev/src/11-email-link/finishSignIn.html",
        handleCodeInApp: true
    };


    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);

        window.localStorage.setItem("emailForSignIn", email);
        alert("Mensaje enviado a: ", email);

    } catch (error) {
        console.log(error);
    }
})