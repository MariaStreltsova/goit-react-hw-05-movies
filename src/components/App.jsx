import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePageRender = lazy(() => import('../pages/HomePage'));
const MoviesPageRender = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsRender = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

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
      <ToastContainer />
    </>
  );
};
