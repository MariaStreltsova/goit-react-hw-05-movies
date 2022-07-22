import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'service/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/moviesList/MoviesList';
import SearchBar from 'components/searchBox/SearchBox';
export default function MoviesPageRender() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if (!seachQuery) {
    //   return;
    // }
    async function getFetchMovies(searchQuery) {
      try {
        const data = await fetchMoviesBySearch(searchQuery);
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const visibleMovies = movies.filter(movie =>
    movie.query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <SearchBar onSubmit={updateQueryString} />
      {movies && <MoviesList movies={visibleMovies} />}
      <Outlet />
    </>
  );
}
