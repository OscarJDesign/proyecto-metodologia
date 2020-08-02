import Axios from 'axios';

const clienteAxios = Axios.create({baseURL: "http://localhost:8080/api"});
export default clienteAxios;