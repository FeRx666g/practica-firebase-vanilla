import { auth } from "../configFirebase";
import { onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const btnReestablecer = document.querySelector("#btnReestablecer");

btnReestablecer.addEventListener("click", async() =>{

    console.log("Botón Presionado.");

    onAuthStateChanged(auth, async(user) => {
        if(user){
            const email = user.email;
            document.body.innerHTML += `Usuario actual: ${user.displayName}`;
            const reestablecer = await sendPasswordResetEmail(auth, email);
            console.log(`Se ha enviado el mensaje a ${email}. Respuesta ${reestablecer}`);
        }else{
            document.body.innerHTML += `No existe ningún usuario.`;
        }
    });

});