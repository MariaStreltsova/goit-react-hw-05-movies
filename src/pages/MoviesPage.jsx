import { Outlet, useSearchParams, useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { fetchMoviesBySearch } from 'service/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/moviesList/MoviesList';
// import SearchBar from 'components/searchBox/SearchBox';

export default function MoviesPageRender() {
  const [movies, setMovies] = useState([]);
  const [searhParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const query = searhParams.get('query') ?? '';

  useEffect(() => {
    const getFetchMovies = async searchQuery => {
      try {
        const data = await fetchMoviesBySearch(searchQuery);

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (query === '') {
      return;
    }
    getFetchMovies(query);
  }, [query]);

  // const visibleMovies = movies.filter(movie =>
  //   movie.query.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };
  return movieId ? (
    <Outlet />
  ) : (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={({ query }, { resetForm }) => {
          setSearchParams({ query });
          resetForm();
        }}
      >
        <Form>
          <Field name="query" type="text" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {Object.keys(movies).length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
