import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navigation from '../components/Novigation/Novigation'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Cast from '../pages/MovieDetails/Cast/Cast'
import Reviews from '../pages/MovieDetails/Reviews/Reviews'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  return (
  
      // <ToastContainer
      //   position="top-right"
      //   autoClose={3000}
      //   hideProgressBar={false}
      //   newestOnTop={false}
      //   closeOnClick
      //   rtl={false}
      //   pauseOnFocusLoss
      //   draggable
      //   pauseOnHover
      //   theme="colored"
      // />
      <BrowserRouter basename="goit-react-hw-05-movies">
<Routes>
  <Route path='' element={<Navigation/>}>
  <Route index element={<Home />}/>
  <Route path="movies" element={<Movies/>}/>
  <Route path="movies/:movieId" element={<MovieDetails/>}>
    
    <Route path="cast" element={<Cast/>}/>
    <Route path="reviews" element={<Reviews/>}/>

   </Route>
  </Route>
</Routes>
</BrowserRouter> 

);
};


