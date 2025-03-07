import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://middleware.cloudcom.com.br',
  baseURL: 'http://teleconsult.com.br:3000',
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

    config.headers.Authorization = authData.access_token
      ? `Bearer ${authData.access_token}`
      : ''
  }

  return config
})
