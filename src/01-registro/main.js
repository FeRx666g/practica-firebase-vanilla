import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configFirebase"; 

console.log("Hola desde la consola");

// Registro del usuario usando email y contraseña.
const btnRegistro = document.querySelector("#formRegistro");

btnRegistro.addEventListener("submit", async(event) => {
  event.preventDefault();

  console.log("Hola desde el formulario.");
  
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try{
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }catch(error){
    console.log(error);
  }
});
