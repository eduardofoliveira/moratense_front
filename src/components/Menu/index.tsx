import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LogOut, Home, BatteryCharging, Layers3 } from 'lucide-react'
import { Navbar } from 'flowbite-react'

import iconeMenu from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthContext'

export const Menu = () => {
  const { logout } = useContext(AuthContext)

  return (
    <>
      <Navbar fluid rounded className="lg:hidden bg-primary">
        <Navbar.Brand as={Link} to="/dashboard" className="">
          <img
            src={iconeMenu}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-sans text-white">
            Tele<span className="font-semibold">Consult</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="bg-primary">
          <Navbar.Link
            as={Link}
            to="/home"
            className="text-white hover:text-black"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/ranking"
            className="text-white hover:text-black"
          >
            Ranking
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/consumo"
            className="text-white hover:text-black"
          >
            Consumo
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <aside className="hidden w-12 hover:w-48 transition-multiple duration-1000 ease-in-out group lg:flex flex-col items-center h-screen py-8 overflow-y-visible bg-primary border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col flex-1 space-y-6">
          <Link className="" to="/dashboard">
            <img
              className="w-8 h-8 group-hover:m-auto transition-all duration-200 ease-in-out"
              src={iconeMenu}
              alt="icone menu top"
            />
          </Link>

          {/* <Link
          to="/home"
          className="flex p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>Dashboard</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            Home
          </strong>
        </Link> */}

          {/* <Link
          to="realtime"
          className="flex p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>Realtime</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            Realtime
          </strong>
        </Link> */}

          {/* <Link
          to="relatorios"
          className="flex p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>Relatórios</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            Relatórios
          </strong>
        </Link> */}

          <Link
            to="home"
            className="flex p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-black"
          >
            <Home />
            <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
              Home
            </strong>
          </Link>

          <Link
            to="ranking"
            className="flex p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-black"
          >
            <BatteryCharging />
            <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
              Ranking
            </strong>
          </Link>

          <Link
            to="consumo"
            className="flex p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-black dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-black"
          >
            <Layers3 />
            <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
              Consumo
            </strong>
          </Link>
        </nav>

        <div className="flex flex-col space-y-6">
          {/* <Link
          to="ajuda"
          className="flex p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>Ajuda</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
            />
          </svg>
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            Ajuda
          </strong>
        </Link> */}

          {/* <Link
          to="configuracoes"
          className="flex p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title>Configurações</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            Configurações
          </strong>
        </Link> */}

          {/* <Link to="user" className="flex">
          <img
            className="object-cover w-6 h-6 rounded-full m-auto group-hover:ml-[8px] group-hover:mr-[0px]"
            src={
              userData.avatar_url
                ? userData.avatar_url
                : 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100'
            }
            alt="Foto do usuário"
          />
          <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
            {userData.display_name}
          </strong>
        </Link> */}

          <button
            type="button"
            className="flex text-white cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg p-1.5"
            onClick={() => {
              logout()
            }}
          >
            <LogOut className="object-cover w-6 h-6 rounded-full m-auto group-hover:ml-[8px] group-hover:mr-[0px]" />
            <strong className="hidden group-hover:block group-hover:pl-4 group-hover:pr-4">
              Logout
            </strong>
          </button>
        </div>
      </aside>
    </>
  )
}
