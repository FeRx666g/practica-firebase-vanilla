import { EmailAuthProvider, linkWithCredential, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../configFirebase";

document.querySelector("#btnAnonimo").addEventListener("click", async() =>{  
    try{
        const result = await signInAnonymously(auth);
        console.log(result);
    }catch(error){
        console.log(error);
    }
});

document.querySelector("#formPermanente").addEventListener("submit", async(e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const credential = EmailAuthProvider.credential(email, password);
    onAuthStateChanged(auth, async(user) => {
        if(user){
            console.log(`Usuario: ${user.displayName}. Anónimo: ${user.isAnonymous}`);

            const result = await linkWithCredential(user, credential);
            console.log(`Resultado: ${result.user.email}. Usuario ID: ${result.user.uid}`);            

        }else{
            console.log("No existe ningún usuario.")
        }
    })

    console.log(`Correo: ${email} - Password: ${password}`);
})