import { useParams } from "react-router";
import { useMovies } from "../../hooks/useMovies";
import { useEffect } from "react";
import { useActors } from "../../hooks/useActors";
import styles from "./MovieInfoPage.module.css"
import { element } from "prop-types";


export function MovieInfoPage() {
    const {movieId}=useParams();
    const {languages}=useParams()

    const {actors, getActors}=useActors();
    
    const { movie, getOneMovie, idiomas, getIdiomas}=useMovies();
    
    const {title, overview, runtime, vote_average,poster_path,}=movie || {}

    let actor=[];
    
    
    useEffect(()=>{
        getActors(movieId)
    },[])

    useEffect(()=>{
        getOneMovie(movieId)
    },[])

    useEffect(()=>{
        getIdiomas(languages)
    },[]);
    let idiomass="";
    try {
        let language=[];
        idiomas.forEach((element)=>{language.push(element.name)})
        
        language.map((idioma)=>{idiomass+=`${idioma}  `})
    } catch (error) {
        
    }

    actors.map((act)=>{
        actor.push(act.name)
    })
    
   return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.info}>Sinopsis: {overview}</p>
        <p className={styles.info}>Estado: </p>
        <p className={styles.info}>Idiomas: {idiomass} </p>
      </div>
    </div>
  );

    
}