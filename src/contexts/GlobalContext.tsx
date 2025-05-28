import { createContext, useContext, useReducer, useEffect } from 'react'

const GlobalContext = createContext<IGlobalContextData | undefined>(undefined)

type GlobalAuthUser = {
  ativo: number
  email: string
  id: string
  id_empresa: number
  nome: string
  removido: number
  status: string
  tipo_conta: string
  token: string
}

type IGlobalState = {
  eventosConsumo: any[]
  eventosSeguranca: any[]
  listaChassi: any[]
  listaMotoristas: any[]
  listaLinhas: any[]
  listaVeiculos: any[]
  authUser: GlobalAuthUser
}

export interface IGlobalContextData {
  globalState: IGlobalState
  globalDispatch: React.Dispatch<any>
}

export const useGlobalContext = (): IGlobalContextData => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider',
    )
  }
  return context
}

import type { PropsWithChildren } from 'react'

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [globalState, globalDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_DATA':
          return { ...state, ...action.payload }
        default:
          return state
      }
    },
    {
      listaLinhas: [],
      listaChassi: [],
      listaMotoristas: [],
      eventosConsumo: [],
      eventosSeguranca: [],
      listaVeiculos: [],
      authUser: {
        ativo: 0,
        email: '',
        id: '',
        id_empresa: 0,
        nome: '',
        removido: 0,
        status: '',
        tipo_conta: '',
        token: '',
      },
    },
  )

  console.log(globalState)

  useEffect(() => {
    const localUserData = localStorage.getItem('@moratense:auth_data')

    if (localUserData) {
      const authUserData = JSON.parse(localUserData)

      globalDispatch({
        type: 'SET_DATA',
        payload: { authUser: authUserData },
      })
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
