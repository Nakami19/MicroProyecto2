
import { useState } from "react";
import { FetchMovies } from "../apis/now-playing-api";

export function useMovies() {
    const [movies, setMovies]=useState([]);
    const [movie, setMovie]=useState([])

    const getMovies=async () => {
        const {data}=await FetchMovies()
        setMovies(data.results)

    }

    return {
        movies, getMovies
    }

    

//     const [characters, setCharacters]=useState ([]) ;
//   const [character, setCharacter]=useState ([null]) ;
//   const [isLoading, setLoading]=useState(false); 

//   const getCharacters= async ()=>{
//     setLoading(true);
//     const {data}=await FetchCharacters();
//     setCharacters(data.results);
//     setLoading(false);
//   };

//   const getSingleCharacter=async (characterId) => {
//     setLoading(true);
//     const {data}=await FetchSingleCharacter(characterId);
//     setCharacter(data);
//     setLoading(false);

//   }

//   return {
//     characters,
//     character,
//     isLoading,
//     getCharacters,
//     getSingleCharacter
//   };
}