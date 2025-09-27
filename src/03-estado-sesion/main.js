import { auth } from "../configFirebase";
import { onAuthStateChanged } from "firebase/auth";


onAuthStateChanged(auth, (user) =>{
    if (user){
        //const userCurrent = auth.currentUser;
        
        document.body.innerHTML += `Bienvenido ${user.displayName}. Correo: ${user.email}. Es anónimo: ${user.isAnonymous}`;
        //document.body.innerHTML += `Con current user: ${userCurrent.displayName}`
        
    } else {
        document.body.innerHTML += `No existe ningún usario.`;
        //window.location.href = "login.html";
    };
})