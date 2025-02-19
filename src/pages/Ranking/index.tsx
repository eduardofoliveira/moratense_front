import { Resumo } from '../../components/Resumo'
import { EventosConsumo } from '../../components/EventosConsumo'
import { Filtro } from '../../components/Filtro'
import { CardLinha } from '../../components/CardLinha'

export const Ranking = () => {
  return (
    <div className="flex flex-col w-full">
      <Filtro />
      <Resumo />
      <EventosConsumo />
      <CardLinha />
      <CardLinha />
      <CardLinha />
    </div>
  )
}
