import { useState } from 'react'
import { Table, Button } from 'flowbite-react'

import { Resumo } from '../Resumo'

function calcularDiferencaPercentual(valorAntigo: any, valorNovo: any) {
  if (!valorAntigo || !valorNovo) return 0

  const diferenca = valorNovo - valorAntigo
  const diferencaPercentual = (diferenca / valorAntigo) * 100
  return diferencaPercentual
}

function abreviarNomesDoMeio(nomeCompleto: string) {
  // Divide o nome completo em partes (considerando espaços)
  const partesDoNome = nomeCompleto.split(' ')

  // Verifica se há pelo menos um nome e um sobrenome
  if (partesDoNome.length <= 2) {
    return nomeCompleto // Retorna o nome completo se não houver nomes do meio
  }

  // Pega o primeiro nome
  const primeiroNome = partesDoNome[0]

  // Pega o último nome
  const ultimoNome = partesDoNome[partesDoNome.length - 1]

  // Abrevia os nomes do meio
  const nomesDoMeioAbreviados = partesDoNome
    .slice(1, -1) // Pega apenas os nomes do meio (exclui primeiro e último)
    .map((parte) => `${parte[0]}.`) // Abrevia cada nome do meio
    .join(' ') // Junta as abreviações com um espaço

  // Retorna o nome formatado
  return `${primeiroNome} ${nomesDoMeioAbreviados} ${ultimoNome}`
}

export const CardLinha = ({
  nome,
  viagens,
  tiposEventos,
}: { viagens: any; nome: any; tiposEventos: any }) => {
  const [tipoLista, setTipoLista] = useState(0)

  return (
    <div className="bg-white ml-2 mr-2 rounded-md mt-2 p-2 pb-6 flex flex-col justify-center items-start">
      <div className="w-full border-b-[1px] border-[#e2e8f0]">
        <h1 className="text-lg font-bold text-center">{nome}</h1>
      </div>
      <Resumo
        qtdVeiculos={String(
          new Set(viagens.map((viagem: any) => viagem.assetId)).size,
        )}
        km={viagens
          .map((viagem: any) => viagem.distanceKilometers)
          .reduce(
            (a: string, b: string) =>
              Number.parseFloat(a) + Number.parseFloat(b),
            0,
          )
          .toFixed(0)}
        ltsConsumidos={viagens
          .map((viagem: any) => viagem.fuelUsedLitres)
          .reduce(
            (a: string, b: string) =>
              Number.parseFloat(a) + Number.parseFloat(b),
            0,
          )
          .toFixed(0)}
        meta={viagens[0].findMeta.meta}
        media={(
          viagens
            .map((viagem: any) => viagem.media)
            .filter((media: any) => media)
            .reduce(
              (a: string, b: string) =>
                Number.parseFloat(a) + Number.parseFloat(b),
              0,
            ) / viagens.length
        ).toFixed(2)}
        potencialMelhoria={`${(
          (viagens.filter((viagem: any) => viagem.atingiuMeta === false)
            .length /
            viagens.length) *
            100
        ).toFixed(0)}%`}
      />
      <div className="flex flex-row gap-2 overflow-x-auto w-full pb-2">
        <Button
          color="blue"
          // outline={tipoLista !== 0}
          outline={false}
          size="sm"
          className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${tipoLista !== 0 ? 'text-primary' : 'text-white'} ${tipoLista !== 0 ? 'bg-white-700' : 'bg-blue-700'}`}
          onClick={() => setTipoLista(0)}
        >
          Principal
        </Button>

        <Button
          color="blue"
          // outline={tipoLista !== 1}
          size="sm"
          className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${tipoLista !== 1 ? 'text-primary' : 'text-white'} ${tipoLista !== 1 ? 'bg-white-700' : 'bg-blue-700'}`}
          onClick={() => setTipoLista(1)}
        >
          Consumo
        </Button>
        <Button
          color="blue"
          // outline={tipoLista !== 2}
          size="sm"
          className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${tipoLista !== 2 ? 'text-primary' : 'text-white'} ${tipoLista !== 2 ? 'bg-white-700' : 'bg-blue-700'}`}
          onClick={() => setTipoLista(2)}
        >
          Segurança
        </Button>
        <Button
          color="blue"
          // outline={tipoLista !== 3}
          size="sm"
          className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${tipoLista !== 3 ? 'text-primary' : 'text-white'} ${tipoLista !== 3 ? 'bg-white-700' : 'bg-blue-700'}`}
          onClick={() => setTipoLista(3)}
        >
          Financeiro
        </Button>
        <Button
          color="blue"
          // outline={tipoLista !== 4}
          size="sm"
          className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${tipoLista !== 4 ? 'text-primary' : 'text-white'} ${tipoLista !== 4 ? 'bg-white-700' : 'bg-blue-700'}`}
          onClick={() => setTipoLista(4)}
        >
          Ecológico
        </Button>
      </div>

      {tipoLista === 0 && ( // Principal
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[1200px]">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-primary text-center p-2">
                  Cod
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Nome
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Lt
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Média
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Méta
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Posição
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  % de Ganho (Meta)
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  % de Ganho Média: {viagens[0].findMeta.media_anterior}
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Ev. Consumo
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Rank Consumo
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Ev. Segurança
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Rank Segurança
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {viagens
                  .map((viagem: any) => {
                    const eventosConsumo = tiposEventos.filter(
                      (item: any) => item.consumo === 1,
                    )
                    const eventosSeguranca = tiposEventos.filter(
                      (item: any) => item.seguranca === 1,
                    )

                    const totalConsumo = Object.keys(viagem).reduce(
                      (acc: any, key: string) => {
                        if (
                          key.startsWith('event_') &&
                          !key.endsWith('_time')
                        ) {
                          const evento = key.replace('event_', '')
                          const eventoObj = eventosConsumo.find(
                            (item: any) =>
                              item.code === Number.parseInt(evento, 10),
                          )

                          if (eventoObj) {
                            if (viagem[key]) {
                              return acc + Number.parseInt(viagem[key], 10)
                            }
                          }
                        }
                        return acc
                      },
                      0,
                    )

                    const totalSeguranca = Object.keys(viagem).reduce(
                      (acc: any, key: string) => {
                        if (
                          key.startsWith('event_') &&
                          !key.endsWith('_time')
                        ) {
                          const evento = key.replace('event_', '')
                          const eventoObj = eventosSeguranca.find(
                            (item: any) =>
                              item.code === Number.parseInt(evento, 10),
                          )

                          if (eventoObj) {
                            if (viagem[key]) {
                              return acc + Number.parseInt(viagem[key], 10)
                            }
                          }
                        }
                        return acc
                      },
                      0,
                    )

                    viagem.totalSeguranca = totalSeguranca
                    viagem.totalConsumo = totalConsumo

                    return viagem
                  })
                  .sort((a: any, b: any) => {
                    if (a.totalSeguranca > b.totalSeguranca) {
                      return -1
                    }
                    if (a.totalSeguranca < b.totalSeguranca) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: any) => {
                    viagem.rankSeguranca = index + 1
                    return viagem
                  })
                  .sort((a: any, b: any) => {
                    if (a.totalConsumo > b.totalConsumo) {
                      return -1
                    }
                    if (a.totalConsumo < b.totalConsumo) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: any) => {
                    viagem.rankConsumo = index + 1
                    return viagem
                  })

                  .sort((a: any, b: any) => {
                    if (a.media > b.media) {
                      return -1
                    }
                    if (a.media < b.media) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: number) => {
                    return (
                      <Table.Row
                        key={`${viagem.id}-${index}-principal`}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {Number.parseInt(viagem.chapa, 10)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {abreviarNomesDoMeio(viagem.motorista)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.distanceKilometers).toFixed(
                            0,
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.fuelUsedLitres).toFixed(0)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.media).toFixed(2)}
                        </Table.Cell>
                        <Table.Cell
                          className={`${viagem.media < viagem.findMeta.meta ? 'text-red-500' : 'text-[#2D3748]'}  text-center p-0`}
                        >
                          {viagem.media < viagem.findMeta.meta
                            ? '10%'
                            : viagem.media >= viagem.findMeta.meta &&
                                viagem.media < viagem.findMeta.supermeta
                              ? `${viagem.findMeta.premiacao_meta * 100}%`
                              : `${viagem.findMeta.premiacao_supermeta * 100}%`}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.meta),
                            Number.parseFloat(viagem.media),
                          ).toFixed(2)}
                          %
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.media_anterior),
                            Number.parseFloat(viagem.media),
                          ).toFixed(2)}
                          %
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.totalConsumo}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.rankConsumo}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.totalSeguranca}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.rankSeguranca}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                <Table.Row className="bg-gray-100 font-bold">
                  <Table.Cell className="text-center p-1">Resumo</Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.distanceKilometers),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.fuelUsedLitres),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.media),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.meta),
                            Number.parseFloat(viagem.media),
                          ),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                    %
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.media_anterior),
                            Number.parseFloat(viagem.media),
                          ),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                    %
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem.totalConsumo),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem.totalSeguranca),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}

      {tipoLista === 1 && ( // Consumo
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[1200px]">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-primary text-center p-2">
                  Cod
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Nome
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Lt
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Média
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Fora da Faixa Verde
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Excesso de Velocidade
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Marcha Lenta Excessiva
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Aceleração Brusca
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Banguela
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Uso indevido pedal
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Excesso de Rotação
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Inércia
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Ev.consumo
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Rank consumo
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {viagens
                  ?.sort((a: any, b: any) => {
                    if (a.totalConsumo > b.totalConsumo) {
                      return -1
                    }
                    if (a.totalConsumo < b.totalConsumo) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: number) => {
                    // console.log(viagem)

                    return (
                      <Table.Row
                        key={`${viagem.id}-${index}-consumo`}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {Number.parseInt(viagem.chapa, 10)}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {abreviarNomesDoMeio(viagem.motorista)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.distanceKilometers).toFixed(
                            0,
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.fuelUsedLitres).toFixed(0)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.media).toFixed(2)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1124 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1136 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1153 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1156 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1227 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1246 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1250 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1255 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.totalConsumo || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.rankConsumo}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                <Table.Row className="bg-gray-100 font-bold">
                  <Table.Cell className="text-center p-1">Resumo</Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.distanceKilometers),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.fuelUsedLitres),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.media),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1124 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1136 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1153 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1156 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1227 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1246 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1250 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1255 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.totalConsumo || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}

      {tipoLista === 2 && ( // Segurança
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[1200px]">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-primary text-center p-2">
                  Cod
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Nome
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Lt
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Média
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Excesso de Velocidade
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Aceleração Brusca
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Curva Brusca
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Freada Brusca
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Ev. Segurança
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Rank Segurança
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {viagens
                  ?.sort((a: any, b: any) => {
                    if (a.totalSeguranca < b.totalSeguranca) {
                      return 1
                    }
                    if (a.totalSeguranca > b.totalSeguranca) {
                      return -1
                    }
                    return 0
                  })
                  .map((viagem: any, index: number) => {
                    // console.log(viagem)

                    return (
                      <Table.Row
                        key={`${viagem.id}-${index}-seguranca`}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {Number.parseInt(viagem.chapa, 10)}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {abreviarNomesDoMeio(viagem.motorista)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.distanceKilometers).toFixed(
                            0,
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.fuelUsedLitres).toFixed(0)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.media).toFixed(2)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1136 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1156 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1252 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem?.event_1253 || 0}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.totalSeguranca}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.rankSeguranca}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                <Table.Row className="bg-gray-100 font-bold">
                  <Table.Cell className="text-center p-1">Resumo</Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.distanceKilometers),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.fuelUsedLitres),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.media),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1136 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1156 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1252 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.event_1253 || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens.reduce(
                      (acc: number, viagem: any) =>
                        acc + Number(viagem?.totalSeguranca || 0),
                      0,
                    )}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}

      {tipoLista === 3 && ( // Financeiro
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[1200px]">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-primary text-center p-2">
                  Cod
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Nome
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Lt
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Média
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Méta
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Posição
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  % de ganho (meta)
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  % de Ganho (Média: {viagens[0]?.findMeta?.media_anterior})
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Combustível Economizado(meta)
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Premiação
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Combustível Economizado(média)
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {viagens
                  ?.sort((a: any, b: any) => {
                    if (a.media > b.media) {
                      return -1
                    }
                    if (a.media < b.media) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: number) => {
                    // console.log(viagem)

                    return (
                      <Table.Row
                        key={`${viagem.id}-${index}-financeiro`}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {Number.parseInt(viagem.chapa, 10)}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {abreviarNomesDoMeio(viagem.motorista)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.distanceKilometers).toFixed(
                            0,
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.fuelUsedLitres).toFixed(0)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.media).toFixed(2)}
                        </Table.Cell>
                        <Table.Cell
                          className={`${viagem.media < viagem.findMeta.meta ? 'text-red-500' : 'text-[#2D3748]'}  text-center p-0`}
                        >
                          {viagem.media < viagem.findMeta.meta
                            ? '10%'
                            : viagem.media >= viagem.findMeta.meta &&
                                viagem.media < viagem.findMeta.supermeta
                              ? `${viagem.findMeta.premiacao_meta * 100}%`
                              : `${viagem.findMeta.premiacao_supermeta * 100}%`}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.meta),
                            Number.parseFloat(viagem.media),
                          ).toFixed(2)}
                          %
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.media_anterior),
                            Number.parseFloat(viagem.media),
                          ).toFixed(2)}
                          %
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          R$ {viagem.combustivel_economizado_meta}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          R$ {viagem.premiacao}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          R$ {viagem.combustivel_economizado_media}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                <Table.Row className="bg-gray-100 font-bold">
                  <Table.Cell className="text-center p-1">Resumo</Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.distanceKilometers),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.fuelUsedLitres),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.media),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.meta),
                            Number.parseFloat(viagem.media),
                          ),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                    %
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          calcularDiferencaPercentual(
                            Number.parseFloat(viagem.findMeta.media_anterior),
                            Number.parseFloat(viagem.media),
                          ),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                    %
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    R${' '}
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          Number(viagem.combustivel_economizado_meta || 0),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    R${' '}
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.premiacao || 0),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    R${' '}
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc +
                          Number(viagem.combustivel_economizado_media || 0),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}

      {tipoLista === 4 && ( // Ecologico
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <div className="min-w-[1200px]">
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-primary text-center p-2">
                  Cod
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Nome
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Lt
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Média
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  KG CO2
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  KG CO2/km
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Redução de KG CO2
                </Table.HeadCell>
                <Table.HeadCell className="text-primary text-center p-2">
                  Árvores Preservadas
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {viagens
                  ?.sort((a: any, b: any) => {
                    if (a.media > b.media) {
                      return -1
                    }
                    if (a.media < b.media) {
                      return 1
                    }
                    return 0
                  })
                  .map((viagem: any, index: number) => {
                    // console.log(viagem)

                    return (
                      <Table.Row
                        key={`${viagem.id}-${index}-ecologico`}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {Number.parseInt(viagem.chapa, 10)}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-[#2D3748] dark:text-white p-1">
                          {abreviarNomesDoMeio(viagem.motorista)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.distanceKilometers).toFixed(
                            0,
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.fuelUsedLitres).toFixed(0)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {Number.parseFloat(viagem.media).toFixed(2)}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.kg_co2}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.kg_co2_km}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.reducao_co2}
                        </Table.Cell>
                        <Table.Cell className="text-[#2D3748] text-center p-0">
                          {viagem.arvores_preservadas}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                <Table.Row className="bg-gray-100 font-bold">
                  <Table.Cell className="text-center p-1">Resumo</Table.Cell>
                  <Table.Cell className="text-center p-1" />
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.distanceKilometers),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.fuelUsedLitres),
                        0,
                      )
                      .toFixed(0)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number.parseFloat(viagem.media),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.kg_co2 || 0),
                        0,
                      )
                      .toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {(
                      viagens.reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.kg_co2_km || 0),
                        0,
                      ) / viagens.length
                    ).toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.reducao_co2 || 0),
                        0,
                      )
                      .toFixed(2)}
                  </Table.Cell>
                  <Table.Cell className="text-center p-1">
                    {viagens
                      .reduce(
                        (acc: number, viagem: any) =>
                          acc + Number(viagem.arvores_preservadas || 0),
                        0,
                      )
                      .toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  )
}
