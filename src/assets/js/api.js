const apiKey = '652be4a0';
import axios from 'axios';

const BaseUrl = 'http://www.omdbapi.com/';

export const testPath = 'http://www.omdbapi.com/?i=tt3896198&apikey=652be4a0';

export function requestSearch(name, mode = 's') {
  return axios.get(`${BaseUrl}?${mode}=${name}&apikey=${apiKey}`);
}

export function toCamelCase(obj) {
  // функция превращает ВотТакие индексы в вотТакие
  const translate = str => str[0].toLowerCase() + str.slice(1)

  const result = Object
    .entries(obj)
    .map(([key, value]) => [translate(key), value])

  return Object.fromEntries(result)
}

export function dropNA (obj) {
  let obj2 = {}
  for (let index in obj) {
    obj2[index] = obj[index] === 'N/A' ? '' : obj[index]
  }
  return obj2
}