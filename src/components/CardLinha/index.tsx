import { Table, Button } from 'flowbite-react'

import { Resumo } from '../Resumo'

export const CardLinha = () => {
  return (
    <div className="bg-white ml-2 mr-2 rounded-md mt-2 p-2 pb-6 flex flex-col justify-center items-start">
      <div className="w-full border-b-[1px] border-[#e2e8f0]">
        <h1 className="text-lg font-bold text-center">
          1721 - PANORAMA X PQ. INDRUSTRIAL SÃO JOSÉ
        </h1>
      </div>
      <Resumo />
      <div className="flex flex-row gap-2 overflow-x-auto w-full">
        <Button color="blue" size="sm" className="font-normal cursor-pointer">
          Principal
        </Button>
        <Button
          color="blue"
          outline
          size="sm"
          className="font-normal text-primary cursor-pointer"
        >
          Consumo
        </Button>
        <Button
          color="blue"
          outline
          size="sm"
          className="font-normal text-primary cursor-pointer"
        >
          Segurança
        </Button>
        <Button
          color="blue"
          outline
          size="sm"
          className="font-normal text-primary cursor-pointer"
        >
          Financeiro
        </Button>
        <Button
          color="blue"
          outline
          size="sm"
          className="font-normal text-primary cursor-pointer"
        >
          Ecológico
        </Button>
      </div>

      <div className="w-full overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="text-primary">Cod</Table.HeadCell>
            <Table.HeadCell className="text-primary">Nome</Table.HeadCell>
            <Table.HeadCell className="text-primary">Lt</Table.HeadCell>
            <Table.HeadCell className="text-primary">Média</Table.HeadCell>
            <Table.HeadCell className="text-primary">Méta</Table.HeadCell>
            <Table.HeadCell className="text-primary">Posição</Table.HeadCell>
            <Table.HeadCell className="text-primary">
              % de Ganho (Meta)
            </Table.HeadCell>
            <Table.HeadCell className="text-primary">
              % de Ganho (Média: 2,04)
            </Table.HeadCell>
            <Table.HeadCell className="text-primary">
              Ev. Consumo
            </Table.HeadCell>
            <Table.HeadCell className="text-primary">
              Rank Consumo
            </Table.HeadCell>
            <Table.HeadCell className="text-primary">
              Ev. Segurança
            </Table.HeadCell>
            <Table.HeadCell className="text-primary">
              Rank Segurança
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                41783
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                ADAO M. O. VILALTA
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                293
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                113
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2,59
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                20 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                1
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                16 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                27 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2923
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                0
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                60
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                41784
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                DINEU F. SILVA
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                293
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                113
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2,59
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                20 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                1
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                16 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                27 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2923
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                0
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                60
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                41785
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                DANIEL M. SOUSA
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                293
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                113
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2,59
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                20 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                1
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                16 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                27 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2923
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                0
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                60
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                41786
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                DORGIVAL P. LIMA
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                293
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                113
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2,59
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                20 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                1
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                16 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                27 %
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                2923
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                0
              </Table.Cell>
              <Table.Cell className="text-[#2D3748] text-center p-0">
                60
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
