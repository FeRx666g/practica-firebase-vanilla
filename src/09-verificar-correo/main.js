import { auth } from "../configFirebase";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";

const btnVerificar = document.querySelector("#btnVerificar");

btnVerificar.addEventListener("click", async() =>{

    console.log("Botón Presionado.");

    onAuthStateChanged(auth, async(user) => {
        if(user){
            document.body.innerHTML += `Usuario actual: ${user.displayName}`;
            const verificacion = await sendEmailVerification(user);
            console.log(verificacion);
        }else{
            document.body.innerHTML += `No existe ningún usuario.`;
        }
    });

});