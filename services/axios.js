import axios from 'axios'

const HttpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export default HttpService
