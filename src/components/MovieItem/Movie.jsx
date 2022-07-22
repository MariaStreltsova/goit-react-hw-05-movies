import { Link } from 'react-router-dom';
const MovieItem = ({ id, title, poster }) => {
  return (
    <>
      <li>
        <Link to={`/movie/${id}`}>
          {/* //   state={{ from: location }} */}
          {/* 
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} /> */}

          <h3>{title}</h3>
        </Link>
      </li>
    </>
  );
};
export default MovieItem;
