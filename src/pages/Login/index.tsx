import { useState, useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import logo from '../../assets/logo.svg'
import onibus_img from '../../assets/onibus_login.png'

export const Login = () => {
  const { login, loading } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: any) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <section className="flex flex-1 items-center justify-center bg-primary dark:bg-gray-900">
      <div className="flex flex-1 flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-30">
        <div className="flex-1 items-center justify-center flex-col hidden lg:flex">
          <div className="flex flex-col items-end w-full pl-[10%]">
            <img className="mb-8 w-[80%]" src={onibus_img} alt="onibus_img" />
            <h1 className="text-4xl text-white font-medium text-left w-full pl-[20%]">
              Gestão de telemetria
            </h1>
            <h1 className="text-4xl text-white font-medium text-left w-full pl-[20%]">
              ao seu alcance.
            </h1>
            <h3 className="text-white mt-4 text-left w-full pl-[20%]">
              Alguns cliques para acessar sua conta
            </h3>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center  justify-center lg:items-start lg:w-1/2">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl  font-sans text-white dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            Tele<span className="font-semibold">Consult</span>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Entrar
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Login
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-[#2d3748] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Login"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-[#2d3748] dark:text-white"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Senha"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {!loading && (
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Entrar
                  </button>
                )}

                {!!loading && (
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </button>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ao entrar, você concorda com nossos <br />
                  <a
                    href="/"
                    className="text-primary hover:underline font-medium"
                  >
                    Termos e Condições
                  </a>{' '}
                  e{' '}
                  <a
                    href="/"
                    className="text-primary hover:underline font-medium"
                  >
                    Políticas de Privacidade
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
