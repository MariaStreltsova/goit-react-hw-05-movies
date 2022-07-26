import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MovieDetails } from 'components/movieDetails/MovieDetails';
const MovieDetailsRender = () => {
  const location = useLocation();
  //   const { movieId } = useParams();
  const goBackPage = location.state?.from ?? '/';
  return (
    <>
      <GoBack to={goBackPage}>Go back</GoBack>
      <MovieDetails />
      <AdditionalInfo>
        <h3>Additional information</h3>
        <AdditionalLink to="cast">Cast</AdditionalLink>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
const GoBack = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
const AdditionalInfo = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
`;
const AdditionalLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[4]}px;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export default MovieDetailsRender;
