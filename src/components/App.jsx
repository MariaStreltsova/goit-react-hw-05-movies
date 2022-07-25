import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePageRender from '../pages/HomePage';
import MoviesPageRender from 'pages/MoviesPage';
import { MovieDetailsRender } from 'pages/MovieDetailsPage';
import CastPage from 'pages/CastPage';
import ReviewsPage from '../pages/ReviewsPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePageRender />} />
          <Route path="movies" element={<MoviesPageRender />}>
            <Route path=":movieId" element={<MovieDetailsRender />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
