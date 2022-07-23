import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePageRender from '../pages/HomePage';
import MoviesPageRender from 'pages/MoviesPage';
import { MovieDetailsRender } from 'pages/MovieDetailsPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePageRender />} />
          <Route path="movies" element={<MoviesPageRender />}>
            <Route path=":movieId" element={<MovieDetailsRender />}>
              <Route path="cast" element={<div>review</div>} />
              <Route path="reviws" element={<div>review</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
