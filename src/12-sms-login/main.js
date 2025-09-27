import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../configFirebase";

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "normal",
    callback: (response) =>{
        console.log(`reCATPCHA verificado: ${response}`);
    },
});

const formTelefono = document.querySelector("#formTelefono");

formTelefono.addEventListener("submit", async(e) => {

    e.preventDefault();
    console.log("Teléfono Log");

    const phoneNumber = e.target.telefono.value;
    const appVerifier = window.recaptchaVerifier;

    try{
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);

        window.confirmationResult = confirmationResult;
        alert(`Mensaje enviado a ${phoneNumber}`);

    }catch(error){
        //window.recaptchaVerifier.clear();
        console.log(error);
    }

    console.log(`Número: ${phoneNumber}. appVerifier: ${appVerifier}`);

});

document.querySelector("#formVerificar").addEventListener("submit", async(e) =>{
    e.preventDefault();

    const codigo = e.target.codigo.value;
    console.log(`Código ingresado: ${codigo}`);

    try{
        const result = await window.confirmationResult.confirm(codigo);
        console.log("Usuario autenticado: ", result.user.phoneNumber);

    }catch(error){
        window.recaptchaVerifier.clear();
        console.log(error);
    }

});