//en este archivo se haran las peticiones de las api
import axios from "axios"; 
const URL='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
//para las api siempre poner el async
// export async function FetchMoviesUC() {
//     return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b204908dc0ac030a23502ced45df53d1");
// }

// export async function FetchMovieUC(MovieId) {
//     return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b204908dc0ac030a23502ced45df53d1/${MovieId}`)
// }