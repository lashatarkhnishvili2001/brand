import axios from 'axios';

export const BASE_URL = 'https://digitalinstitute-amazon.azurewebsites.net/api/'

const instance = axios.create({baseURL: BASE_URL});

export default instance;