import axios from 'axios'

const renderURL = 'https://projetoalphaapi.onrender.com'
export const api = axios.create({
  baseURL: renderURL,
})
