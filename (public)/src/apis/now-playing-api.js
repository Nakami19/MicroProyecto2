
import axios from "axios"; 

const key=import.meta.env.VITE_BACKEND_URLAPI;
const URL=`https://api.themoviedb.org/3/movie/now_playing?${key}&language=es-ES`;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTE0MWY0NGVmNmUyMzNlMWU1OGVjNzQwOGQ0YzZiMiIsInN1YiI6IjY0ODQ4MDk1YzlkYmY5MDBhZDQ1YzNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-kmm10ctTinCoG_oVUlRR8q46zxv-rOFaWBJ5YH7u0'
    }
  };

export async function FetchMovies() {

    return axios.get(URL,options);
}


export async function Getgenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?${key}&language=es`,options)
}


export async function FetchMovie(MovieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?${key}&language=es-ES`)
}

export async function getCredits(MovieId) {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${MovieId}/credits?${key}&language=es-ES`)
}