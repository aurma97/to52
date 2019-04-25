import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `/api/post`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})