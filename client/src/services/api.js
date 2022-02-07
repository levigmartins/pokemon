import axios from 'axios';
const settings = require('../../settings.json');

const api = axios.create({
    baseURL: settings.BACKEND_URL
})

export default api;