import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  // baseURL: 'https://login.teleconsult.com.br/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { response } = error
    const { status } = response

    if (status === 401) {
      if (response.data.error) {
        if (response.data.error === 'Token invalid') {
          localStorage.clear()
          window.location.reload()
        }
      }
    }
    return Promise.reject(error)
  },
)

api.interceptors.request.use((config) => {
  const localUserData = localStorage.getItem('@moratense:auth_data')

  if (localUserData) {
    const authData = JSON.parse(localUserData)

    config.headers.Authorization = authData.token
      ? `Bearer ${authData.token}`
      : ''
  }

  return config
})
