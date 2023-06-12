import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export function Card({movie,genres}) {
    let generos=[];
    let gen="";
    genres.map((genr)=>{
            movie.genre_ids.map((num)=>{
                if (num==genr.id) {
                    generos.push(genr.name)
                }
            })
})
    generos.map((gene)=>{gen+=`${gene} `})
   return ( 
   <div className={styles.container}>
     <div className={styles.movies}> 
     <Link to={`/movies/${movie.id}`} className={styles.link}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        </Link>
        <div className={styles.info}>
        <div className={styles.movietitle}>
            <h2>{movie.title}</h2>
        </div>
        <div className={styles.movieinfo}>
            <p>Idioma original: {movie.original_language}</p>
            <p>Generos:</p>
            <p>{gen}</p>
        </div>
      </div>
      </div>
        
    </div>
   )
}