import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
   <BrowserRouter basename="goit-react-hw-05-movies--">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path="/movies/:movieId" element={<MovieDetails/>}/>
  <Route path="/movies/:movieId/cast" element={<Cast/>}/>
  <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
</Routes>

   </BrowserRouter>
  );
};