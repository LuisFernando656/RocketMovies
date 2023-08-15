import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-69ml.onrender.com'
})