import { useState } from "react"
import { getPeliculasDocument } from "../firebase/info";


export function usePeliculas() {
    const [peliculas, setPeliculas]=useState([]);
    const [isLoading, setLoading]=useState(false); 
    

    const getPeliculas = async ()=> {
        setLoading(true)
        const peli= await getPeliculasDocument();
        setPeliculas(peli);
        setLoading(false)
    }

    return {
        peliculas,isLoading,getPeliculas
    }
   
}