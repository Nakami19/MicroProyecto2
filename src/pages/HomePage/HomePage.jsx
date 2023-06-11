import { useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./HomePage.module.css"
import { Card } from "../../components/Card/Card";
import { Carousel } from "../../components/Carrousel/Carousel";
import { slides } from "../../components/Carrousel/SliderData.json";

import { useGenres } from "../../hooks/useGenres";

export function HomePage() {
    const {
        movies,
        getMovies
    }=useMovies()

    useEffect(()=>{
        getMovies();
    },[])

    const {
        genres,
        getGenres
    }=useGenres()

    useEffect(()=>{
        getGenres()
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
            <Carousel data={slides} />
            </div>
        <div className={styles.space}></div>
        <h1 className={styles.title}>Cartelera</h1>
        <div className={styles.movies}>
          {
         movies.map((movie)=>{
        
            return (
                <Card movie={movie} genres={genres} key={movie.title}/>
            )
            
            
})
          
          }
        </div>
      </div>
    )
}