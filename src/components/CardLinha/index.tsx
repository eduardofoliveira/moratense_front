import { useState } from 'react'
import { Table, Button } from 'flowbite-react'
// import { v4 as uuidv4 } from 'uuid'

import { Resumo } from '../Resumo'

// type IConsumo = {
//   id: string
//   tripId: string
//   distanceKilometers: string
//   fuelUsedLitres: string
//   tripStart: string
//   tripEnd: string
// }

// type IMeta = {
//   id: string
//   id_empresa: number
//   fk_id_chassi: string
//   fk_id_globus_linha: string
//   meta: string
//   supermeta: string
//   premiacao_meta: string
//   premiacao_supermeta: string
//   media_anterior: string
//   created_at: string
//   updated_at: string
// }

// type IViagen = {
//   resumoEventos: any
//   numero_chassi: number
//   description: string
//   chapa: string
//   codigo: string
//   codigo_funcionario: number
//   nome: string
//   nome_linha: string
//   data_saida_garagem: string
//   data_recolhido: string
//   assetId: string
//   driverId: string
//   chassi_linha: string
//   id_linha_globus: string
//   id_chassi: string
//   meta: IMeta
//   consumo: IConsumo[]
//   kmRodados: number
//   litrosConsumidos: number
//   media: number
//   meta_atingida: string
// }

// type IResumo = {
//   potencial_melhoria: string
//   veiculos: number
//   kmRodados: number
//   litrosConsumidos: number
//   media: string
// }

// type ILista = {
//   resumo: IResumo
//   viagens: IViagen[]
// }

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
  // console.log(tiposEventos)

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
      <div className="flex flex-row gap-2 overflow-x-auto w-full">
        <Button
          color="blue"
          outline={tipoLista !== 0}
          size="sm"
          className={`font-normal cursor-pointer ${tipoLista !== 0 ? 'text-primary' : 'text-white'}`}
          onClick={() => setTipoLista(0)}
        >
          Principal
        </Button>
        <Button
          color="blue"
          outline={tipoLista !== 1}
          size="sm"
          className={`font-normal cursor-pointer ${tipoLista !== 1 ? 'text-primary' : 'text-white'}`}
          onClick={() => setTipoLista(1)}
        >
          Consumo
        </Button>
        <Button
          color="blue"
          outline={tipoLista !== 2}
          size="sm"
          className={`font-normal cursor-pointer ${tipoLista !== 2 ? 'text-primary' : 'text-white'}`}
          onClick={() => setTipoLista(2)}
        >
          Segurança
        </Button>
        <Button
          color="blue"
          outline={tipoLista !== 3}
          size="sm"
          className={`font-normal cursor-pointer ${tipoLista !== 3 ? 'text-primary' : 'text-white'}`}
          onClick={() => setTipoLista(3)}
        >
          Financeiro
        </Button>
        <Button
          color="blue"
          outline={tipoLista !== 4}
          size="sm"
          className={`font-normal cursor-pointer ${tipoLista !== 4 ? 'text-primary' : 'text-white'}`}
          onClick={() => setTipoLista(4)}
        >
          Ecológico
        </Button>
      </div>

      {tipoLista === 0 && ( // Principal
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
                % de Ganho Média: {viagens[0].findMeta.media_anterior}
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
                      if (key.startsWith('event_') && !key.endsWith('_time')) {
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
                      if (key.startsWith('event_') && !key.endsWith('_time')) {
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
                        {viagem.distanceKilometers}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.fuelUsedLitres}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.media}
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
            </Table.Body>
          </Table>
        </div>
      )}

      {tipoLista === 1 && ( // Consumo
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
                Fora da Faixa Verde
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Excesso de Velocidade
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Marcha Lenta Excessiva
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Aceleração Brusca
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Banguela
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Uso indevido pedal
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Excesso de Rotação
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Inércia
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Ev.consumo
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
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
                        {viagem.distanceKilometers}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.fuelUsedLitres}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.media}
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
            </Table.Body>
          </Table>
        </div>
      )}

      {tipoLista === 2 && ( // Segurança
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
                Excesso de Velocidade
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Aceleração Brusca
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Curva Brusca
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Freada Brusca
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Ev. Segurança
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
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
                        {viagem.distanceKilometers}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.fuelUsedLitres}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.media}
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
            </Table.Body>
          </Table>
        </div>
      )}

      {tipoLista === 3 && ( // Financeiro
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
                % de ganho (meta)
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                % de Ganho (Média: {viagens[0]?.findMeta?.media_anterior})
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Combustível Economizado(meta)
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Premiação
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
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
                        {viagem.distanceKilometers}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.fuelUsedLitres}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.media}
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
            </Table.Body>
          </Table>
        </div>
      )}

      {tipoLista === 4 && ( // Ecologico
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
                KG CO2
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                KG CO2/km
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
                Redução de KG CO2
              </Table.HeadCell>
              <Table.HeadCell className="text-primary text-center">
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
                        {viagem.distanceKilometers}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.fuelUsedLitres}
                      </Table.Cell>
                      <Table.Cell className="text-[#2D3748] text-center p-0">
                        {viagem.media}
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
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  )
}
