import { useEffect, useState } from "react";
import styles from "./UserPage.module.css"
import { useUserContext } from "../../contexts/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Card } from "../../components/Card/Card";
import { useGenres } from "../../hooks/useGenres";

export function UserPage() { 
    const { user} = useUserContext();
    const [refrescar, setRefrescar]=useState(0);
    const [favorito, setFavorito]=useState([]);

    const Favorites= async ()=> {
        if (user) {
                const docRef=doc(db,"users",user.id)
                
                const docSnap= await getDoc(docRef)
                const datos=docSnap.data()
                const favoritos=datos.favorites;
                setFavorito(favoritos)
        }
    }

    useEffect(()=>{
        Favorites()
    },[refrescar])

    const {
        genres,
        getGenres
    }=useGenres()

    useEffect(()=>{
        getGenres()
    },[])

return(
    <div className={styles.container}>
        <section className={styles.perfil_usuario}>
            <div className={styles.perfil_header}>
                <div className={styles.portada}>
                <div className={styles.userAvatar}>
                    <img src="https://i.pinimg.com/originals/6f/57/76/6f57760966a796644b8cfb0fbc449843.png" className={styles.Avatar}/>
                </div>
                </div>
                
            </div>
            <div className={styles.body_perfil}>
                <div className={styles.userinfo}>
                    <h2 className={styles.name}>{user.name}</h2>

                </div>

            </div>
        </section>

        <section className={styles.info}>
        <div className={styles.movies}>
            {
            favorito.map((movie)=>{
            return (
                <Card movie={movie} genre={genres} key={movie.id}/>
            )            
            })
            }
        </div>
        </section>

    </div>
);
}