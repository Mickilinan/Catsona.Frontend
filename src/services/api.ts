import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://localhost:7189',
    timeout: 10000,
});