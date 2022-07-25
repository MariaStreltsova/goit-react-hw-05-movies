import { Outlet, useSearchParams, useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { fetchMoviesBySearch } from 'service/apiService';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/moviesList/MoviesList';
// import SearchBar from 'components/searchBox/SearchBox';
import styled from 'styled-components';
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
        <SearchForm>
          <Input name="query" type="text" placeholder="Search movies" />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
      </Formik>
      {Object.keys(movies).length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
const SearchForm = styled(Form)`
  margin-left: ${p => p.theme.space[3]}px;
`;
const Input = styled(Field)`
  margin-right: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

const SearchBtn = styled.button`
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
