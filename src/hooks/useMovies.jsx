
import { useState } from "react";
import { FetchMovie, FetchMovies, getCredits } from "../apis/now-playing-api";

export function useMovies() {
    const [movies, setMovies]=useState([]);
    const [movie, setMovie]=useState([null])
    const [idiomas, setIdiomas]=useState([])
    const [dates, setDates]=useState([]);

    const getMovies=async () => {
        const {data}=await FetchMovies()
        setMovies(data.results)
        setDates(data.dates)

    }

    const getOneMovie=async (MovieId) => {
        const {data}=await FetchMovie(MovieId)
        setMovie(data)
        setIdiomas(data.spoken_languages)

    }

    const getIdiomas= (data) => {
        setIdiomas(data)
    }

    return {
        movies, getMovies, movie, getOneMovie, idiomas, getIdiomas
    }

}