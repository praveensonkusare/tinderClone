import axios from 'axios';

const instance = axios.create({
  //baseURL: 'http://localhost:8000',
  baseURL: 'https://tinder-clone-7zop.onrender.com/',
});

export default instance;
