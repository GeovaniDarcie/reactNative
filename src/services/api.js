import axios from 'axios';

const api = axios.create({
    baseURL: 'https://game-of-thrones-quotes.herokuapp.com/v1/',
});

export default api;