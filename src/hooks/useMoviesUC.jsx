import { useState } from "react";
import { FetchMovieUC, FetchMoviesUC } from "../apis/up-coming-api";

export function useMoviesUC () {
    const [moviesuc, setMoviesUC]=useState([]);
    const [movieuc, setMovieUC]=useState([null])

    const getMoviesUC= async ()=> {
        const {data}=await FetchMoviesUC();
        setMoviesUC(data.results)
    }

    const getOneMovieUC=async() => {
        const {data}=await FetchMovieUC();
        setMovieUC(data)
    }

    return {
        moviesuc, getMoviesUC, movieuc, getOneMovieUC
    }
}