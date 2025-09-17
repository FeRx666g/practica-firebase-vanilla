import { auth } from "../configFirebase";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) =>{
    if (user){
        document.body.innerHTML += `Bienvenido ${user.displayName}. Correo: ${user.email}`
    } else {
        document.body.innerHTML += `No existe ningún usario.`;
        //window.location.href = "login.html";
    };
})