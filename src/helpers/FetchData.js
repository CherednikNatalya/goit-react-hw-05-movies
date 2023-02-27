import axios from 'axios';
// import { toast } from 'react-toastify';

// https://api.themoviedb.org/3/trending/movie/week?api_key=b52f4a97df843a5ead1cf8ccfba387fd

const BASE_URL= 'https://api.themoviedb.org/3/'
const API_KEY= 'b52f4a97df843a5ead1cf8ccfba387fd'

export const getFilms = async( text,page )=>{
    try {
      const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=${page}&include_adult=false`)
      return response
    } catch (error) {
      console.error(error)
    }
}

export const getTrending = async()=>{
    try {
      const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      return response
    } catch (error) {
      console.error(error)
    }
}

// export const getDetails = async(id) =>{
//   try {
//     const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
//     return response
//   } catch (error) {
//     toast.error(error);
//   }
// }

// export const getCast = async(id) =>{
//   try {
//     const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
//     return response
//   } catch (error) {
//     toast.error(error);
//   }
// }

// export const getReview = async(id) =>{
//   try {
//     const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
//     return response
//   } catch (error) {
//     toast.error(error);
//   }
// }