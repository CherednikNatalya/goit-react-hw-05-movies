import {Routes, Route} from 'react-router-dom';

import Navigation from '../components/Novigation/Novigation'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Cast from '../pages/MovieDetails/Cast/Cast'
import Reviews from '../pages/MovieDetails/Reviews/Reviews'




export const App = () => {
  return (
    
<Routes>
  <Route path='/' element={<Navigation/>}>
  <Route index element={<Home />}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path="/movies/:movieId" element={<MovieDetails/>}/>
  <Route path="/movies/:movieId/cast" element={<Cast/>}/>
  <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
  </Route>
</Routes>

  );
};


