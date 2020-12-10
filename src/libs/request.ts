import HttpRequest from './axios'

const baseURL = 'http://localhost:8080/'

export const axios = new HttpRequest(baseURL);