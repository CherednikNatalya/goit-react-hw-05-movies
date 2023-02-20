import axios from 'axios';
import { toast } from 'react-toastify';

const instanseAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b52f4a97df843a5ead1cf8ccfba387fd',
  },
});

export const fetchData = (url, query) => {
  return instanseAxios({
    url,
    params: { query: query },
  })
    .then(({ data, status, statusText }) => ({ data, status, statusText }))
    .catch(err => {
      toast.error(err);
    });
};


