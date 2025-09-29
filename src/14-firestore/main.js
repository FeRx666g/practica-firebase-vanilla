import { db } from "../configFirebase";
import { addDoc, collection } from "firebase/firestore";


document.querySelector("#btnFirestore").addEventListener("click", async() => {

        const docRef = await addDoc(collection(db, "users"),{
            Nombre: "Fernando",
            Apellido: "González",
            Edad: "25",
        });

        console.log(`Documento creado. ID: ${docRef.id}`);

})