import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configFirebase";

// Login del usuario usando email y contraseña.
const btnLogin = document.querySelector("#formLogin");

btnLogin.addEventListener("submit", async(event) =>{
  event.preventDefault();
  
  const email = document.querySelector("#emailLogin").value;
  const password = document.querySelector("#passwordLogin").value;
  
  console.log(`Hola desde el Login. Email: ${email} Password: ${password}`);

  try{

    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    console.log(userLogin);


  }catch(error){
    console.log(error);
  }
  

});
