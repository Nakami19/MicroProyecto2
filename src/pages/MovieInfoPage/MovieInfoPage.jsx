import { Navigate, useParams } from "react-router";
import { useMovies } from "../../hooks/useMovies";
import { useEffect } from "react";
import { useActors } from "../../hooks/useActors";
import styles from "./MovieInfoPage.module.css"
import { element } from "prop-types";
import { Reservar_URL } from "../../constants/url";
import { Link } from "react-router-dom";


export function MovieInfoPage() {
    const {movieId}=useParams();
    const {languages}=useParams()

    const {actors, getActors}=useActors();
    
    const { movie, getOneMovie, idiomas, getIdiomas}=useMovies();
    
    const {title, overview, runtime, vote_average,poster_path,}=movie || {}

    let actor=[];
    let acting="";
    
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

    actor.map((actorss)=>{
        acting+=`${actorss}, `
    })
    
   return (
    
    <div className={styles.container}>
    <div className={styles.square}>
      <div className={styles.imageContainer}>
        
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.info}>Sinopsis: {overview}</p>
        <p className={styles.info}>Actores: {acting} </p>
        <p className={styles.info}>Duración: {runtime} </p>
        <p className={styles.info}>Rating: {vote_average} </p>
        <p className={styles.info}>Idiomas: {idiomass} </p>
      </div>
      </div>
      <Link to={Reservar_URL} className={styles.link}>
      <button className={styles.reserva}>Reservar</button>
      </Link>
    </div>
    
   
  );

    
}