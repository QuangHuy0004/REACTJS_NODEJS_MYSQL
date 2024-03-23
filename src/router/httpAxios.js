import axios from "axios";

const httpAxios = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: { 'X-Custom-Header': 'foobar' }
});
httpAxios.interceptors.response.use(function (response) {
  return response.data;
});
export default httpAxios;
