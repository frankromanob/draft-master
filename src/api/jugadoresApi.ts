import axios from 'axios';

const jugadoresApi = axios.create({
    baseURL:'/api'
})

export default jugadoresApi;