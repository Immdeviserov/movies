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


export function requestSearch(name, mode = 's') {
  return axios.get(`${BaseUrl}?${mode}=${name}&apikey=${apiKey}`);
}

export function toCamelCase(obj) {
  // функция превращает ВотТакие индексы в вотТакие
  const translate = str => str[0].toLowerCase() + str.slice(1)

  let pairs = Object.entries(obj);
  return Object.fromEntries(pairs.map(pair => [translate(pair[0]), pair[1]])
  )
}