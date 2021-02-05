import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chaut.herokuapp.com',
});

export default instance;
