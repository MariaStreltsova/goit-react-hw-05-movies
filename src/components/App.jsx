import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePageRender from '../pages/HomePage';
import MoviesPageRender from 'pages/MoviesPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePageRender />} />
          <Route path="movies" element={<MoviesPageRender />} />
        </Route>
      </Routes>
    </>
  );
};
