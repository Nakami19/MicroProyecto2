import { useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./HomePage.module.css"
import { Card } from "../../components/Card/Card";
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

    // genres.map((genero)=>{
    //     console.log(genero)
    // })

    genres.map((genr)=>{
        console.log(genr)
        movies.map((movie)=>{
            movie.genre_ids.map((num)=>{
                if (num==genr.id) {
                    console.log(movie.title+" wiii "+genr.name)
                }
            })
        })
    })

    return (
        <div className={styles.container}>
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