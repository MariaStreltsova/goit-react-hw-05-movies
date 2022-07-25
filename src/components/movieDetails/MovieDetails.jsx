import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'service/apiService';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getFetchMoovies(movieId) {
      try {
        const data = await fetchMoviesById(movieId);

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMoovies(movieId);
  }, [movieId]);
  if (Object.keys(movie).length > 0) {
    const { title, vote_average, overview, genres, poster_path } = movie;
    const userScore = vote_average * 10;
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>
          User score: <span>{userScore}%</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </div>
    );
  }
};
