import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b955cfd3c9f73eb51718e31500dd3096';

export const fetchTrendingMoovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesBySearch = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCastById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviewById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// export async function fetchTrendingMoovies() {
//   const url = `/trending/movie/week?api_key=${apiKey}`;
//   const { data } = await axios.get(url);
//   return data;
// }

// export async function fetchMoviesBySearch(searchMovie) {
//   const url = `/search/movie?query=${searchMovie}&api_key=${apiKey}`;
//   const { data } = axios.get(url);
//   return data;
// }

// export async function fetchMoviesById(movieId) {
//   const url = `/movie/${movieId}?api_key=${apiKey}`;
//   const { data } = axios.get(url);
//   return data;
// }
