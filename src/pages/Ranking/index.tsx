import { useEffect, useState, useCallback } from 'react'

import { Resumo } from '../../components/Resumo'
import { EventosConsumo } from '../../components/EventosConsumo'
import { Filtro } from '../../components/Filtro'
import { CardLinha } from '../../components/CardLinha'

import { api } from '../../service/api'

export const Ranking = () => {
  const [data, setData] = useState<any>([])

  const fetchData = useCallback(async () => {
    const { data } = await api.get('/report/ranking', {
      params: {
        start: '2025-02-14 00:00:00',
        end: '2025-02-14 23:59:59',
      },
    })

    // console.log(data)

    const agrupadoPorLinha = data.trips.reduce((acc: any, item: any) => {
      const linha = item.nome_linha
      if (!acc[linha]) {
        acc[linha] = []
      }
      acc[linha].push(item)
      return acc
    }, [])

    setData(agrupadoPorLinha)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="flex flex-col w-full">
      <Filtro />
      <Resumo qtdVeiculos="10" km="100.23" />
      <EventosConsumo />

      {Object.keys(data).length > 0 &&
        Object.keys(data).map((linha: any) => (
          <CardLinha key={linha} nome={linha} viagens={data[linha]} />
        ))}
      {Object.keys(data).length === 0 && <h1>Nenhum dado encontrado</h1>}
    </div>
  )
}
