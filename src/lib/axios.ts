import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://rolling-api.vercel.app/2-3',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  async (response) => response,
  (error) => Promise.reject(error)
)
