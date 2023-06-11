import axios from "axios";

export async function FetchMovieSearch(busqueda) {
 return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a141f44ef6e233e1e58ec7408d4c6b2&query=${busqueda}&include_adult=false&language=en-US`)
}