import { auth } from "../configFirebase";
import { signOut } from "firebase/auth";

console.log("Cerrar Sesión.");

const btnLogout = document.querySelector("#btnLogout");

btnLogout.addEventListener("click", async(event) => {
    event.preventDefault();

    try{
        const logout = await signOut(auth);
        console.log(`Se ha cerrado sesión.`)
        console.log(logout);

    }catch(error){
        console.log(error);
    }

});