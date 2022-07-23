import { MovieDetails } from 'components/movieDetails/MovieDetails';
import { Link, Outlet, useLocation } from 'react-router-dom';
export const MovieDetailsRender = () => {
  const location = useLocation();
  const goBackPage = location.state?.from ?? '/';
  return (
    <>
      <Link to={goBackPage}>Go back</Link>
      <MovieDetails />
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
