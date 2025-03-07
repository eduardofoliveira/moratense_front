import { Table, Button } from 'flowbite-react'

import { Resumo } from '../Resumo'

export const CardLinha = ({
  viagens,
  nome,
}: { viagens: any; nome: string }) => {
  console.log(viagens)

  return (
    <div className="bg-white ml-2 mr-2 rounded-md mt-2 p-2 pb-6 flex flex-col justify-center items-start">
      <div className="w-full border-b-[1px] border-[#e2e8f0]">
        <h1 className="text-lg font-bold text-center">{nome}</h1>
      </div>
      <Resumo
        qtdVeiculos={new Set(
          viagens.map((item: any) => item.assetId),
        ).size.toString()}
        km={(
          Math.floor(
            viagens.reduce(
              (acc: number, item: any) =>
                (acc * 100 +
                  Number(item.consumo[0]?.distanceKilometers * 100)) /
                100,
              0,
            ) * 100,
          ) / 100
        ).toFixed(2)}
      />
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
            <Table.HeadCell className="text-primary text-center">
              Cod
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Nome
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Km
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Lt
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Média
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Méta
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Posição
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              % de Ganho (Meta)
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              % de Ganho (Média: 2,04)
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Ev. Consumo
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Rank Consumo
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Ev. Segurança
            </Table.HeadCell>
            <Table.HeadCell className="text-primary text-center">
              Rank Segurança
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {viagens.map((viagem: any) => (
              <Table.Row
                key={viagem.data_recolhido}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                  {Number.parseInt(viagem.codigo, 10)}
                </Table.Cell>
                <Table.Cell className="text-[#2D3748] text-center p-0">
                  {viagem.nome}
                </Table.Cell>
                <Table.Cell className="text-[#2D3748] text-center p-0">
                  {viagem.consumo[0]?.distanceKilometers}
                </Table.Cell>
                <Table.Cell className="text-[#2D3748] text-center p-0">
                  {viagem.consumo[0]?.fuelUsedLitres}
                </Table.Cell>
                <Table.Cell className="text-[#2D3748] text-center p-0">
                  {(
                    Math.floor(
                      (viagem.consumo[0]?.distanceKilometers /
                        viagem.consumo[0]?.fuelUsedLitres) *
                        100,
                    ) / 100
                  ).toFixed(2)}
                </Table.Cell>
              </Table.Row>
            ))}

            {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
