const apiKey = '652be4a0';
import axios from 'axios';
import { fileURLToPath } from 'url';

const BaseUrl = 'http://www.omdbapi.com/';

export const testPath = 'http://www.omdbapi.com/?i=tt3896198&apikey=652be4a0';

export const filmSearch = (name) => {
  let data;
  axios
    .get(`${BaseUrl}?s=${name}&apikey=${apiKey}`)
    // .then(result => {
    //   console.log(result)
    //   data = result.data.Search.map(film => film.Title);
    // })
    .catch(error => {
      console.log(error);
    });
  console.log(data);
  // return data.map(film => film.Title);
};


export function requestSearch(name) {
  return axios.get(`${BaseUrl}?s=${name}&apikey=${apiKey}`);
}