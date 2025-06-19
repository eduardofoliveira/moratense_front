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
        <Navbar.Brand as={Link} to="/dashboard">
          <img
            src={iconeMenu}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-sans text-white">
            Tele<span className="font-semibold">Consult</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="text-white hover:text-gray-200 focus:ring-white" />
        <Navbar.Collapse className="bg-primary">
          <Navbar.Link
            as={Link}
            to="/home"
            className="text-white hover:text-gray-200 hover:bg-gray-700/50 rounded-lg px-4 py-2"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/ranking"
            className="text-white hover:text-gray-200 hover:bg-gray-700/50 rounded-lg px-4 py-2"
          >
            Ranking
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/consumo"
            className="text-white hover:text-gray-200 hover:bg-gray-700/50 rounded-lg px-4 py-2"
          >
            Consumo
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <aside className="hidden w-12 hover:w-48 transition-multiple duration-1000 ease-in-out group lg:flex flex-col items-center h-screen py-8 overflow-y-visible bg-primary border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
        <nav className="flex flex-col flex-1 space-y-6">
          <Link to="/dashboard">
            <img
              className="w-8 h-8 group-hover:m-auto transition-all duration-200 ease-in-out"
              src={iconeMenu}
              alt="icone menu top"
            />
          </Link>

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
