import { subDays, format } from 'date-fns'
import {
  Dropdown,
  CustomFlowbiteTheme,
  Flowbite,
  Checkbox,
  Label,
  Button,
} from 'flowbite-react'
import { useState } from 'react'

const theme: CustomFlowbiteTheme = {
  button: {
    color: {
      cyan: 'text-gray-700 bg-white',
    },
  },
  dropdown: {
    arrowIcon: 'ml-2 h-4 w-4',
    content: 'py-1 focus:outline-none',
    floating: {
      animation: 'transition-opacity',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-red-900 dark:bg-red-700',
          light: 'bg-white',
          auto: 'bg-white dark:bg-red-700',
        },
        placement: '-4px',
      },
      base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      divider: 'my-1 h-px bg-red-100 dark:bg-red-600',
      header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
      hidden: 'invisible opacity-0',
      item: {
        container: '',
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-red-100 focus:bg-red-100 focus:outline-none dark:text-gray-200 dark:hover:bg-red-600 dark:hover:text-white dark:focus:bg-red-600 dark:focus:text-white',
        icon: 'mr-2 h-4 w-4',
      },
      style: {
        dark: 'bg-red-900 text-white dark:bg-red-700',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-red-700 dark:text-white',
      },
      target: 'w-full',
    },
    inlineWrapper: 'flex items-center',
  },
}

export const Filtro = () => {
  const [dataInicial, setDataInicial] = useState(
    format(subDays(new Date(), 1), 'yyyy-MM-dd'),
  )
  const [dataFinal, setDataFinal] = useState(format(new Date(), 'yyyy-MM-dd'))

  return (
    <>
      <div className="mt-2 ml-2 mr-2 gap-x-4 flex-wrap grid grid-cols-2 lg:grid-cols-5">
        <div className="mb-5">
          <label
            htmlFor="dt-inicial"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data Inicial
          </label>
          <input
            type="date"
            id="dt-inicial"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={dataInicial}
            onChange={(event) => setDataInicial(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dt-final"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Data Inicial
          </label>
          <input
            type="date"
            id="dt-final"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={dataFinal}
            onChange={(event) => setDataFinal(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="carros"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Carros
          </label>
          <input
            type="text"
            id="carros"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="excluir-carros"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Excluir Carros
          </label>
          <input
            type="text"
            id="excluir-carros"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="linhas"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Linhas
          </label>
          <input
            type="text"
            id="linhas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="colaboradores"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Colaboradores
          </label>
          <input
            type="text"
            id="colaboradores"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="chassis"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Chassis
          </label>
          <input
            type="text"
            id="chassis"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="eventos-seguranca"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Eventos de Segurança
          </label>
          <input
            type="text"
            id="eventos-seguranca"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="eventos-consumo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Eventos de Consumo
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown
              dismissOnClick={false}
              label="Eventos de Consumo"
              color="cyan"
            >
              <Dropdown.Item>
                <div className="flex items-center gap-2">
                  <Checkbox id="1" />
                  <Label htmlFor="1">(RT) Fora da Faixa Verde</Label>
                </div>
              </Dropdown.Item>

              <Dropdown.Item>
                <div className="flex items-center gap-2">
                  <Checkbox id="2" />
                  <Label htmlFor="2">(RT) Excesso de Velocidade</Label>
                </div>
              </Dropdown.Item>

              <Dropdown.Item>
                <div className="flex items-center gap-2">
                  <Checkbox id="3" />
                  <Label htmlFor="3">(RT) Marcha Lenta Excessiva</Label>
                </div>
              </Dropdown.Item>
              {/* <Dropdown.Item>External link</Dropdown.Item> */}
            </Dropdown>
          </Flowbite>
        </div>
      </div>
      <div className="ml-2 mr-2 gap-x-4 flex-wrap grid grid-cols-1 lg:grid-cols-5">
        <div className="mb-5">
          <Button color="blue" size="sm" className="w-full">
            Buscar
          </Button>
        </div>
      </div>
    </>
  )
}
