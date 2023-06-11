//en este archivo se haran las peticiones de las api
import axios from "axios"; 

const URL="https://api.themoviedb.org/3/movie/now_playing?api_key=b204908dc0ac030a23502ced45df53d1";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTE0MWY0NGVmNmUyMzNlMWU1OGVjNzQwOGQ0YzZiMiIsInN1YiI6IjY0ODQ4MDk1YzlkYmY5MDBhZDQ1YzNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-kmm10ctTinCoG_oVUlRR8q46zxv-rOFaWBJ5YH7u0'
    }
  };
//para las api siempre poner el async
export async function FetchMovies() {
    return axios.get(URL,options);
}


export async function Getgenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7a141f44ef6e233e1e58ec7408d4c6b2&language=es`,options)
}


export async function FetchMovie(MovieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=7a141f44ef6e233e1e58ec7408d4c6b2&language=es-ES`)
}

export async function getCredits(MovieId) {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=7a141f44ef6e233e1e58ec7408d4c6b2&language=es-ES`)
}