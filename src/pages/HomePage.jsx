import MovieItem from '../components/MovieItem/Movie';
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

  return (
    <>
      {movies &&
        movies.map(({ id, original_title }) => {
          return <MovieItem key={id} title={original_title} id={id} />;
        })}
    </>
  );
}
