import { useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./HomePage.module.css"
import { Card } from "../../components/Card/Card";

export function HomePage() {
    const {
        movies,
        getMovies
    }=useMovies()

    useEffect(()=>{
        getMovies();
    },[])


    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Peliculas</h1>
        <div className={styles.movies}>
          {
         movies.map((movie)=>{
        
            return (
                <Card movie={movie} key={movie.title}/>
            )
            
            
})
          
          }
        </div>
      </div>
    )
}