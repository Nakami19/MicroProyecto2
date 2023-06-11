import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./HomePage.module.css"
import { Card } from "../../components/Card/Card";
import { Carousel } from "../../components/Carrousel/Carousel";
import { slides } from "../../components/Carrousel/SliderData.json";

import { useGenres } from "../../hooks/useGenres";
import { useMoviesUC } from "../../hooks/useMoviesUC";
//import { useSearch } from "../../hooks/useSearch";

export function HomePage() {
    const {
        movies,
        getMovies, getSearchMovies
    }=useMovies()

    const {
        moviesuc, getMoviesUC
    }=useMoviesUC()

    useEffect(()=>{
        getMovies() ;
    },[])

    const {
        genres,
        getGenres
    }=useGenres()

    useEffect(()=>{
        getGenres()
    },[])

    useEffect(()=>{
        getMoviesUC()
    },[])

    const [busqueda, setBusqueda]=useState("");
    
    // const handleOnsubmit= (a) => {
    //     a.preventDefault();
    //     // if(busqueda) {
    //     //     getSearchMovies(busqueda)
    //     // }
    //     // setBusqueda("")
    // }
    useEffect(()=> {
    },[busqueda])

    const handleChange= (e)=> {
        setBusqueda(e.target.value)
        if(busqueda) {
           getSearchMovies(busqueda)
           }
    }
    
    if (busqueda=="") {
            getMovies() ;
        
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
            <Carousel data={slides} />
            </div>
        <div className={styles.space}></div>
        <div className={styles.inputContainer}>
            {/* <form className={styles.form} onSubmit={handleOnsubmit}> */}
            <input className={styles.busqueda} placeholder="Buscar Película" onChange={handleChange}/>
            {/* <button className={styles.buscar}>Buscar</button> */}
            {/* </form> */}
        </div>

        <h1 className={styles.title}>Cartelera</h1>
        <div className={styles.movies}>
            {
            movies.map((movie)=>{
            return (
                <Card movie={movie} genres={genres} key={movie.id}/>
            )            
            })
            }
        </div>
        <h1 className={styles.title}>Proximamente</h1>
        <div className={styles.movies}>
          {
         moviesuc.map((movie)=>{
            return (
                <Card movie={movie} genres={genres} key={movie.title}/>
            )
            })
          }
        </div>
      </div>
    )
} else if (busqueda!="") {
    return (
    <div className={styles.container}>
        <div className={styles.hero}>
            <Carousel data={slides} />
            </div>
        <div className={styles.space}></div>
        <div className={styles.inputContainer}>
            {/* <form className={styles.form} onSubmit={handleOnsubmit}> */}
            <input className={styles.busqueda} placeholder="Buscar Película" onChange={handleChange}/>
            {/* <button className={styles.buscar}>Buscar</button> */}
            {/* </form> */}
        </div>
        <h1 className={styles.title}>Resultados</h1>
        <div className={styles.movies}>
            {
            movies.map((movie)=>{
            return (
                <Card movie={movie} genres={genres} key={movie.id}/>
            )            
            })
            }
        </div>

    </div>
    )
}
}