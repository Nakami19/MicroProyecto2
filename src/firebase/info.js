import { db } from "./config";
import { collection } from 'firebase/firestore';
import { doc, setDoc, addDoc, updateDoc, getDoc, getDocs } from "firebase/firestore";


export const getPeliculasDocument=async () => {
    let Peliculass=[];
    const peliculas= collection(db, "peliculas");
    const pelicula= await getDocs(peliculas);
    pelicula.forEach((doc)=>{
        Peliculass.push(doc.data())
    })
    return Peliculass;
}

