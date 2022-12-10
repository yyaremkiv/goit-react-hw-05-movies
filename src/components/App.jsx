import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Layout } from './Layout/Layout';
// import { HomePage } from '../pages/HomePage/HomePage';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Movies } from '../pages/Movies/Movies';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
