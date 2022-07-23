import MovieItem from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <MovieItem key={id} title={original_title} id={id} />;
      })}
    </ul>
  );
};
