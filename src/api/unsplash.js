import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8e0a0f1a00c239956365a475224eaf6d64d044249dcca2db487b3af2fa3ae786'
    }    
});

export default unsplash;