import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'b955cfd3c9f73eb51718e31500dd3096';
export async function fetchTrendingMoovies() {
  const url = `/trending/movie/week?api_key=${apiKey}`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchMoviesBySearch(searchMovie) {
  const url = `/search/movie?query=${searchMovie}&api_key=${apiKey}`;
  const { data } = axios.get(url);
  return data;
}
