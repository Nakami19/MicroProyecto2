import axios from "axios";
const key=import.meta.env.VITE_BACKEND_URLAPI;
export async function FetchMovieSearch(busqueda) {
 return axios.get(`https://api.themoviedb.org/3/search/movie?${key}&query=${busqueda}&include_adult=false&language=en-US`)
}