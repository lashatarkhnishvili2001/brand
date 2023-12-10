import axios from 'axios';

export const BASE_URL = 'https://ngglobalwebapi20231210182820.azurewebsites.net/api/'

const instance = axios.create({baseURL: BASE_URL});

export default instance;