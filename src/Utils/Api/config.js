import axios from 'axios';

const serverUrl = 'https://dummyjson.com';

export const instance = axios.create({
    baseURL: serverUrl,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
