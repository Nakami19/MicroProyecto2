import { useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./HomePage.module.css"
import { Card } from "../../components/Card/Card";
import { Carousel } from "../../components/Carrousel/Carousel";
import { slides } from "../../components/Carrousel/SliderData.json";


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
            <div className={styles.hero}>
            <Carousel data={slides} />
            </div>
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