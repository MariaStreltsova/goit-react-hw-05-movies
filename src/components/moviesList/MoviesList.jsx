import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';
export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return <MovieItem key={id} title={original_title} id={id} />;
      })}
    </List>
  );
};
