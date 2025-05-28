import { useState, useCallback } from 'react'
import { subDays, format, isAfter } from 'date-fns'
// import { v4 as uuidv4 } from 'uuid'

import { Resumo } from '../../components/Resumo'
import { EventosConsumo } from '../../components/EventosConsumo'
import { Filtro } from '../../components/Filtro'
import { CardLinha } from '../../components/CardLinha'

import { api } from '../../service/api'
import { useGlobalContext } from '../../contexts/GlobalContext'

export const Ranking = () => {
  const { globalState } = useGlobalContext()
  const { listaVeiculos, listaLinhas, listaChassi, listaMotoristas } =
    globalState

  const [dataInicial, setDataInicial] = useState(
    format(subDays(new Date(), 1), 'yyyy-MM-dd'),
  )
  const [dataFinal, setDataFinal] = useState(format(new Date(), 'yyyy-MM-dd'))

  const [tiposEventos, setTiposEventos] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [trips, setTrips] = useState<any>([])
  const [veiculos, setVeiculos] = useState<any>([])
  const [consumoKm, setConsumoKm] = useState<any>([])
  const [consumoLitro, setConsumoLitro] = useState<any>([])
  const [media, setMedia] = useState<number>(0)
  const [potencialMelhoria, setPotencialMelhoria] = useState<string>('0%')
  const [mediaMeta, setMediaMeta] = useState<number>(0)
  const [resumoConsumo, setResumoConsumo] = useState<any>([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    setTrips([])
    setVeiculos([])
    setConsumoLitro([])
    setConsumoKm([])
    setMedia(0)
    setPotencialMelhoria('0%')
    setMediaMeta(0)
    setResumoConsumo([])
    setTiposEventos([])

    if (isAfter(new Date(dataInicial), new Date(dataFinal))) {
      alert('Data inicial deve ser menor que data final')
      return
    }

    const excludeAssets = listaVeiculos
      .filter((veiculo: any) => veiculo.exclude === true)
      .map((veiculo: any) => veiculo.assetId)

    const includeAssets = listaVeiculos
      .filter((veiculo: any) => veiculo.enable === true)
      .map((veiculo: any) => veiculo.assetId)

    const includeBusLines = listaLinhas
      .filter((linha: any) => linha.enable === true)
      .map((linha: any) => linha.id)

    const includeChassiNumbers = listaChassi
      .filter((chassi: any) => chassi.enable === true)
      .map((chassi: any) => chassi.numero_chassi)

    const includeDrivers = listaMotoristas
      .filter((motorista: any) => motorista.enable === true)
      .map((motorista: any) => motorista.employeeNumber)

    const { data } = await api.post('/report/ranking', {
      start: dataInicial,
      end: dataFinal,
      excludeAssets: excludeAssets.length > 0 ? excludeAssets : [],
      includeAssets: includeAssets.length > 0 ? includeAssets : [],
      includeBusLines: includeBusLines.length > 0 ? includeBusLines : [],
      includeChassiNumbers:
        includeChassiNumbers.length > 0 ? includeChassiNumbers : [],
      includeDrivers: includeDrivers.length > 0 ? includeDrivers : [],
    })

    const groupByLinhaAndChassi = data.viagens.reduce((acc: any, item: any) => {
      const linha = `${item.numero_chassi}-${item.nome_linha}`
      if (!acc[linha]) {
        acc[linha] = []
      }
      acc[linha].push(item)
      return acc
    }, {})

    setTrips(groupByLinhaAndChassi)
    setVeiculos(data.resumo.assetQuantity)
    setConsumoKm(data.resumo.distanceKilometers)
    setConsumoLitro(data.resumo.fuelUsedLitres)
    setMedia(data.resumo.media)
    setPotencialMelhoria(data.resumo.potencialMelhoria)
    setMediaMeta(data.resumo.mediaMeta)
    setResumoConsumo(data.resumoConsumo)
    setTiposEventos(data.tiposEventos)

    // const agrupadoPorLinha = data.trips.reduce((acc: any, item: any) => {
    //   const linha = `${item.numero_chassi}-${item.nome_linha}`
    //   if (!acc[linha]) {
    //     acc[linha] = []
    //   }
    //   acc[linha].push(item)
    //   return acc
    // }, [])

    // setData(agrupadoPorLinha)
    setLoading(false)
  }, [
    dataInicial,
    dataFinal,
    listaVeiculos,
    listaLinhas,
    listaChassi,
    listaMotoristas,
  ])

  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  return (
    <div className="flex flex-col w-full">
      <Filtro
        dataInicial={dataInicial}
        setDataInicial={setDataInicial}
        dataFinal={dataFinal}
        setDataFinal={setDataFinal}
        fnBuscar={fetchData}
        loading={loading}
      />

      <Resumo
        qtdVeiculos={veiculos.length === 0 ? '0' : veiculos}
        km={
          Number.isNaN(Number.parseFloat(consumoKm))
            ? '0'
            : Number.parseFloat(consumoKm).toFixed(0)
        }
        ltsConsumidos={
          Number.isNaN(Number.parseFloat(consumoLitro))
            ? '0'
            : Number.parseFloat(consumoLitro).toFixed(0)
        }
        meta={mediaMeta.toFixed(2)}
        media={media.toFixed(2)}
        potencialMelhoria={potencialMelhoria}
      />
      {resumoConsumo.length > 0 && (
        <EventosConsumo resumoConsumo={resumoConsumo} />
      )}

      {loading && <h1>Carregando...</h1>}
      {/* <pre>{JSON.stringify(trips, null, 2)}</pre> */}

      {!loading &&
        trips &&
        Object.keys(trips).map((key: any) => {
          const trip = trips[key]

          // console.log(key)
          // console.log(trip[0].id)

          return (
            <CardLinha
              key={trip[0].id}
              nome={`${trip[0].numero_chassi} ${trip[0].nome_linha}`}
              viagens={trip}
              tiposEventos={tiposEventos}
            />
          )
        })}
      {/* trips.map((trip: any) => (
          <CardLinha
            key={trip.id}
            nome={`${trip.numero_chassi} ${trip.nome_linha}`}
            viagens={trip}
          />
        ))} */}
      {!loading && trips?.length === 0 && <h1>Nenhum dado encontrado</h1>}
    </div>
  )
}
