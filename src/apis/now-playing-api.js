//en este archivo se haran las peticiones de las api
import axios from "axios"; 

//para las api siempre poner el async
export async function FetchMovies() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=b204908dc0ac030a23502ced45df53d1");
}

export async function FetchMovie(MovieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b204908dc0ac030a23502ced45df53d1/${MovieId}`)
}