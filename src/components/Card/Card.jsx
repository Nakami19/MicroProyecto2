import styles from "./Card.module.css";

export function Card({movie}) {
   return ( 
   <div className={styles.container}>
     <div className={styles.movies}> 
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={styles.image}
        />
        <div className={styles.movietitle}>
            <h3>{movie.title}</h3>
        </div>
        <div className={styles.movieinfo}>
            <p>Idioma original: {movie.original_language}</p>
        </div>
      </div>
      
        
    </div>
   )
}