import { Navigate, useParams } from "react-router";
import { useMovies } from "../../hooks/useMovies";
import { useEffect, useState } from "react";
import { useActors } from "../../hooks/useActors";
import styles from "./MovieInfoPage.module.css"
import { Reservar_URL } from "../../constants/url";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { UpdateFavorites } from "../../firebase/users-service";


export function MovieInfoPage() {
    const {movieId}=useParams();
    const {languages}=useParams()

    const {actors, getActors}=useActors();
    
    const { movie, getOneMovie, idiomas, getIdiomas}=useMovies();
    
    const {title, overview, runtime, vote_average,poster_path,status,release_date, id}=movie || {}
    const { user } = useUserContext();



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
        if(act.known_for_department=="Acting") {
        actor.push(act.name)
    }
    })

    actor.map((actorss)=>{
        
        acting+=`${actorss}, `
    })

    const handleAñadir= async ()=>{
      let existe=false;
      user.reservas.map((peli)=>{
        if(peli.id==movie.id){
          existe=true;
        } 
      })

      if(existe==false) {
        await UpdateFavorites(user.id, movie,user)
      }  
    }


    if (status=="Released") {
        return (
            
            <div className={styles.container}>
            <div className={styles.square}>
              <div className={styles.imageContainer}>
                
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className={styles.image} />
              </div>
              
              <div className={styles.details}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.button_container}>
                  <button className={styles.button} onClick={handleAñadir}>Añadir Favoritos</button>
              </div>
                <p className={styles.info}>Sinopsis: {overview}</p>
                <p className={styles.info}>Actores: {acting} </p>
                <p className={styles.info}>Duración: {runtime} </p>
                <p className={styles.info}>Rating: {vote_average} </p>
                <p className={styles.info}>Idiomas: {idiomass} </p>
              </div>
              </div>
              <Link to={`/seats/${id}`} className={styles.link}>
              <button className={styles.reserva}>Reservar</button>
              </Link>
            </div>
            
          
          );
    }
    if (status!="Released") {
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
          <button className={styles.reserva}>Proximamente el {release_date}</button>
        </div>
        
      
      );

    }
   

    
}