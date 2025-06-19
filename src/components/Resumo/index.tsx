import img_qtd_veiculos from '../../assets/img_qtd_veiculos.png'
import img_km_rodado from '../../assets/img_km_rodado.png'
import img_litros_consumidos from '../../assets/img_litros_consumidos.png'
import img_meta from '../../assets/img_meta.png'
import img_meta_atingida from '../../assets/img_meta_atingida.png'
import img_potencial_melhoria from '../../assets/img_potencial_melhoria.png'

export const Resumo = ({
  qtdVeiculos,
  km,
  ltsConsumidos,
  meta,
  media,
  potencialMelhoria,
}: {
  qtdVeiculos: string
  km: string
  ltsConsumidos: string
  meta: string
  media: string
  potencialMelhoria: string
}) => {
  return (
    <>
      {/* Para telas maiores 6 colunas de itens */}
      <div className="hidden grid-cols-3 p-2 gap-4 lg:grid-cols-6 lg:grid w-full bg-blue-50 rounded-lg mt-1 mb-1">
        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">
              Quantidade de Veiculos
            </span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {qtdVeiculos}
            </h1>
          </div>
          <div>
            <img
              src={img_qtd_veiculos}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">KMs Rodado</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {km}
            </h1>
          </div>

          <div>
            <img
              src={img_km_rodado}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">Litros Consumidos</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {ltsConsumidos}
            </h1>
          </div>
          <div>
            <img
              src={img_litros_consumidos}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">Meta</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {meta}
            </h1>
          </div>

          <div>
            <img
              src={img_meta}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">Média Atindida</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {media}
            </h1>
          </div>

          <div>
            <img
              src={img_meta_atingida}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <span className="text-start inline-block">
              Potencial de Melhoria
            </span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              {potencialMelhoria}
            </h1>
          </div>

          <div>
            <img
              src={img_potencial_melhoria}
              alt="Quantidade de veiculos"
              className="w-[55px]"
            />
          </div>
        </div>
      </div>

      {/* Para telas menores 3 colunas de itens */}
      <div className="grid grid-cols-3 p-2 gap-4 lg:grid-cols-6 lg:hidden bg-blue-50 rounded-lg mt-1 mb-1">
        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_qtd_veiculos}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">
            Quantidade de Veiculos
          </span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_km_rodado}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">KMs Rodado</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_litros_consumidos}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">
            Litros Consumidos
          </span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_meta}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">Meta</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_meta_atingida}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">
            Média Atindida
          </span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between bg-white p-4 rounded-md gap-2">
          <div>
            <img
              src={img_potencial_melhoria}
              alt="Quantidade de veiculos"
              className="w-[40px]"
            />
          </div>
          <span className="text-center inline-block text-sm">
            Potencial de Melhoria
          </span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-start">
              360
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
