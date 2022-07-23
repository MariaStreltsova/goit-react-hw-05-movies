import { MoviesList } from '../components/moviesList/MoviesList';
import { useState, useEffect } from 'react';

import { fetchTrendingMoovies } from '../service/apiService';

export default function HomePageRender() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getFetchMoovies() {
      try {
        const data = await fetchTrendingMoovies();
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMoovies();
  }, []);

  return <>{movies && <MoviesList movies={movies} />};</>;
}
