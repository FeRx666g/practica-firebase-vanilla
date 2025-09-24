import { auth } from "../configFirebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const btnGoogle = document.querySelector("#btnGoogle");

btnGoogle.addEventListener("click", async(event) => {
    event.preventDefault();
    console.log("Evento Click Google");
    
    const provider = new GoogleAuthProvider();

    try{
        const loginGoogle = await signInWithPopup(auth, provider);
        console.log(loginGoogle);

    } catch(error){
        console.log(error);
    }

});

