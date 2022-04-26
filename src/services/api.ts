import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://huia-test-bff.herokuapp.com',
});
