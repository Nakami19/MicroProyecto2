import { useState } from "react";
import { Getgenres } from "../apis/now-playing-api";

export function useGenres() {
    const [genres, setGenres]=useState([]);
    const getGenres= async () => {
        const {data}=await Getgenres()
        setGenres(data.genres)
    }

    return (
        genres
    )

}