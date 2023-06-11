import { useState } from "react"
import { getCredits } from "../apis/now-playing-api"


export function useActors() {

    const [actors, setActors]=useState([])

    const getActors=async (MovieId) => {
        const{data}=await getCredits(MovieId)
        setActors(data.cast)

    }

    return {
        actors, getActors
    }
}