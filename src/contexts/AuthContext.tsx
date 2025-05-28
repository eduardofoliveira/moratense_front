import { createContext, useCallback, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { Menu } from '../components/Menu'
import { api } from '../service/api'
import { useGlobalContext } from './GlobalContext'

type ILogin = {
  username: string
  password: string
}

interface IThemeContextData {
  isLogged: { islogged: boolean }
  loading: boolean
  userData: any
  updateUserData: (data: any) => void
  login: ({ username, password }: ILogin) => void
  logout: () => void
}

export const AuthContext = createContext({} as IThemeContextData)

interface IAppAuthProviderProps {
  children: React.ReactNode
}

export const AppAuthProvider: React.FC<IAppAuthProviderProps> = ({
  children,
}) => {
  const { globalDispatch } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(() => {
    const localIsLogged = localStorage.getItem('@moratense:islogged')

    if (localIsLogged) {
      return JSON.parse(localIsLogged)
    }

    return false
  })

  const [userData, setUserData] = useState(() => {
    const localUserData = localStorage.getItem('@moratense:auth_data')

    if (localUserData) {
      return JSON.parse(localUserData)
    }

    return {}
  })

  const updateUserData = useCallback((data: any) => {
    setUserData(data)
  }, [])

  const login = useCallback(
    async ({ username, password }: ILogin) => {
      setLoading(true)

      try {
        const { data } = await api.post('/auth', {
          user: username,
          password: password,
        })

        globalDispatch({
          type: 'SET_DATA',
          payload: { authUser: data },
        })

        localStorage.setItem(
          '@moratense:islogged',
          JSON.stringify({ islogged: true }),
        )
        setIsLogged({ islogged: true })
        localStorage.setItem('@moratense:auth_data', JSON.stringify(data))
        setUserData(data)

        navigate('/dashboard')
      } catch (error: any) {
        if (error?.response?.data?.error) {
          toast.error(error.response.data.error)
        } else {
          toast.error(error.message)
        }
      } finally {
        setLoading(false)
      }
    },
    [navigate, globalDispatch],
  )

  const logout = useCallback(() => {
    localStorage.removeItem('@moratense:islogged')
    localStorage.removeItem('@moratense:auth_data')

    setIsLogged({ islogged: false })

    window.location.href = '/'
  }, [])

  useEffect(() => {
    localStorage.setItem('@moratense:auth_data', JSON.stringify(userData))
  }, [userData])

  return (
    <AuthContext.Provider
      value={{
        loading,
        isLogged,
        userData,
        updateUserData,
        login,
        logout,
      }}
    >
      <div className="flex flex-1 flex-col lg:flex-row w-[100vw]">
        {isLogged.islogged === true && <Menu />}
        <div className="flex flex-1 bg-slate-100">{children}</div>
      </div>
    </AuthContext.Provider>
  )
}
