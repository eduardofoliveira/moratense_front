import { useEffect, useCallback } from 'react'
import {
  // Dropdown,
  // CustomFlowbiteTheme,
  // Flowbite,
  // Checkbox,
  // Label,
  Button,
} from 'flowbite-react'

import SearchableSelect from '../../components/SearchableSelect'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { api } from '../../service/api'

// const theme: CustomFlowbiteTheme = {
//   button: {
//     color: {
//       cyan: 'text-gray-700 bg-white',
//     },
//   },
//   dropdown: {
//     arrowIcon: 'ml-2 h-4 w-4',
//     content: 'py-1 focus:outline-none',
//     floating: {
//       animation: 'transition-opacity',
//       arrow: {
//         base: 'absolute z-10 h-2 w-2 rotate-45',
//         style: {
//           dark: 'bg-red-900 dark:bg-red-700',
//           light: 'bg-white',
//           auto: 'bg-white dark:bg-red-700',
//         },
//         placement: '-4px',
//       },
//       base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
//       content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
//       divider: 'my-1 h-px bg-red-100 dark:bg-red-600',
//       header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
//       hidden: 'invisible opacity-0',
//       item: {
//         container: '',
//         base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-red-100 focus:bg-red-100 focus:outline-none dark:text-gray-200 dark:hover:bg-red-600 dark:hover:text-white dark:focus:bg-red-600 dark:focus:text-white',
//         icon: 'mr-2 h-4 w-4',
//       },
//       style: {
//         dark: 'bg-red-900 text-white dark:bg-red-700',
//         light: 'border border-gray-200 bg-white text-gray-900',
//         auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-red-700 dark:text-white',
//       },
//       target: 'w-full',
//     },
//     inlineWrapper: 'flex items-center',
//   },
// }

export const Filtro = (props: any) => {
  const { globalState, globalDispatch } = useGlobalContext()
  const {
    authUser,
    eventosConsumo,
    eventosSeguranca,
    listaChassi,
    listaMotoristas,
    listaLinhas,
    listaVeiculos,
  } = globalState

  const getVeiculos = useCallback(async () => {
    try {
      const { data } = await api.get('/asset/listar', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      const uniqueVeiculos = data.reduce((acc: any, current: any) => {
        const exists = acc.find((item: any) => item.id === current.id)
        if (!exists) {
          acc.push(current)
        }
        return acc
      }, [])

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          listaVeiculos: uniqueVeiculos.map((item: any) => {
            item.enable = true
            item.exclude = false
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar veiculos:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  const getListaLinhas = useCallback(async () => {
    try {
      const { data } = await api.get('/linhas/listar', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      const uniqueLinhas = data.reduce((acc: any, current: any) => {
        const exists = acc.find((item: any) => item.id === current.id)
        if (!exists) {
          acc.push(current)
        }
        return acc
      }, [])

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          listaLinhas: uniqueLinhas.map((item: any) => {
            item.enable = true
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar linhas:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  const getListaMotoristas = useCallback(async () => {
    try {
      const { data } = await api.get('/driver/listar', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      const uniqueMotoristas = data.reduce((acc: any, current: any) => {
        const exists = acc.find((item: any) => item.id === current.id)
        if (!exists) {
          acc.push(current)
        }
        return acc
      }, [])

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          listaMotoristas: uniqueMotoristas.map((item: any) => {
            item.enable = true
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar motoristas:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  const getListaChassi = useCallback(async () => {
    try {
      const { data } = await api.get('/chassi/listar', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      const uniqueChassi = data.reduce((acc: any, current: any) => {
        const exists = acc.find(
          (item: any) => item.numero_chassi === current.numero_chassi,
        )
        if (!exists) {
          acc.push(current)
        }
        return acc
      }, [])

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          listaChassi: uniqueChassi.map((item: any) => {
            item.enable = true
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar eventos de consumo:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  const getEventosSeguranca = useCallback(async () => {
    try {
      const { data } = await api.get('/events/security', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          eventosSeguranca: data.map((item: any) => {
            item.enable = true
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar eventos de consumo:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  const getEventosConsumo = useCallback(async () => {
    try {
      const { data } = await api.get('/events/consumer', {
        params: {
          id_empresa: authUser.id_empresa,
        },
      })

      globalDispatch({
        type: 'SET_DATA',
        payload: {
          eventosConsumo: data.map((item: any) => {
            item.enable = true
            return item
          }),
        },
      })
    } catch (error) {
      console.error('Erro ao buscar eventos de consumo:', error)
      return []
    }
  }, [globalDispatch, authUser.id_empresa])

  useEffect(() => {
    getEventosConsumo()
    getEventosSeguranca()
    getListaChassi()
    getListaMotoristas()
    getListaLinhas()
    getVeiculos()
  }, [
    getEventosConsumo,
    getEventosSeguranca,
    getListaChassi,
    getListaMotoristas,
    getListaLinhas,
    getVeiculos,
  ])

  console.log(listaChassi)

  const {
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    fnBuscar,
    loading,
  } = props
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
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Carros
          </label>
          <SearchableSelect
            options={[
              ...listaVeiculos.map((evento: any) => ({
                label: evento.description,
                value: evento.id,
              })),
            ]}
            value={listaVeiculos
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.id)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  listaVeiculos: listaVeiculos.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.id)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Carro Selecionado"
          />
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="carros"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Carros
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown dismissOnClick={false} label="Carros" color="cyan">
              {listaVeiculos.map((veiculo: any) => (
                <Dropdown.Item key={`${veiculo.id}-veiculos`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`veiculo-${veiculo.id}`}
                      checked={veiculo.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            listaVeiculos: listaVeiculos.map((item: any) => {
                              if (item.id === veiculo.id) {
                                item.enable = !item.enable
                              }

                              return item
                            }),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`veiculo-${veiculo.id}`}>
                      {veiculo.description}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}

        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Excluir Carros
          </label>
          <SearchableSelect
            options={[
              ...listaVeiculos.map((evento: any) => ({
                label: evento.description,
                value: evento.id,
              })),
            ]}
            value={listaVeiculos
              .filter((evento: any) => evento.exclude)
              .map((evento: any) => evento.id)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  listaVeiculos: listaVeiculos.map((item: any) => {
                    item.exclude = !!valoreselecionado.includes(item.id)

                    // item.enable = valoreselecionado.includes(item.id)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Carro Excluido"
          />
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="excluir-carros"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Excluir Carros
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown
              dismissOnClick={false}
              label="Excluir Carros"
              color="cyan"
            >
              {listaVeiculos.map((veiculo: any) => (
                <Dropdown.Item key={`${veiculo.id}-veiculos`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`veiculo-${veiculo.id}`}
                      checked={veiculo.exclude}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            listaVeiculos: listaVeiculos.map((item: any) => {
                              if (item.id === veiculo.id) {
                                item.exclude = !item.exclude
                              }

                              return item
                            }),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`veiculo-${veiculo.id}`}>
                      {veiculo.description}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}

        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Linhas
          </label>
          <SearchableSelect
            options={[
              ...listaLinhas.map((evento: any) => ({
                label: evento.nome_linha,
                value: evento.id,
              })),
            ]}
            value={listaLinhas
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.id)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  listaLinhas: listaLinhas.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.id)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhuma Linha Selecionado"
          />
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="linhas"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Linhas
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown dismissOnClick={false} label="Linhas" color="cyan">
              {listaLinhas.map((linha: any) => (
                <Dropdown.Item key={`${linha.id}-linhas`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`linha-${linha.id}`}
                      checked={linha.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            listaLinhas: listaLinhas.map((item: any) => {
                              if (item.id === linha.id) {
                                item.enable = !item.enable
                              }

                              return item
                            }),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`linha-${linha.id}`}>
                      {linha.nome_linha}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}

        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Motoristas
          </label>
          <SearchableSelect
            options={[
              ...listaMotoristas.map((evento: any) => ({
                label: evento.name,
                value: evento.id,
              })),
            ]}
            value={listaMotoristas
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.id)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  listaMotoristas: listaMotoristas.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.id)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Motoristas Selecionado"
          />
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="colaboradores"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Colaboradores
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown dismissOnClick={false} label="Colaboradores" color="cyan">
              {listaMotoristas.map((motorista: any) => (
                <Dropdown.Item key={`${motorista.id}-motoristas`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`motoristas-${motorista.id}`}
                      checked={motorista.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            listaMotoristas: listaMotoristas.map(
                              (item: any) => {
                                if (item.id === motorista.id) {
                                  item.enable = !item.enable
                                }

                                return item
                              },
                            ),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`motoristas-${motorista.id}`}>
                      {motorista.name}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}

        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Chassis
          </label>
          <SearchableSelect
            options={[
              ...listaChassi.map((evento: any) => ({
                label: evento.numero_chassi,
                value: evento.id,
              })),
            ]}
            value={listaChassi
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.id)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  listaChassi: listaChassi.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.id)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Chassis Selecionado"
          />
        </div>

        {/* <div className="mb-5">
          <label
            htmlFor="chassis"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Chassis
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown dismissOnClick={false} label="Chassis" color="cyan">
              {listaChassi.map((evento: any) => (
                <Dropdown.Item key={`${evento.id}-consumo`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`evento-consumo-${evento.id}`}
                      checked={evento.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            listaChassi: listaChassi.map((item: any) => {
                              if (item.id === evento.id) {
                                item.enable = !item.enable
                              }

                              return item
                            }),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`evento-consumo-${evento.id}`}>
                      {evento.numero_chassi}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}
        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Eventos de Segurança
          </label>
          <SearchableSelect
            options={[
              ...eventosSeguranca.map((evento: any) => ({
                label: evento.descricao_exibida,
                value: evento.code,
              })),
            ]}
            value={eventosSeguranca
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.code)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  eventosSeguranca: eventosSeguranca.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.code)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Eventos de Segurança Selecionado"
          />
        </div>
        {/* <div className="mb-5">
          <label
            htmlFor="eventos-seguranca"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Eventos de Segurança
          </label>

          <Flowbite theme={{ theme }}>
            <Dropdown
              dismissOnClick={false}
              label="Eventos de Segurança"
              color="cyan"
            >
              {eventosSeguranca.map((evento: any) => (
                <Dropdown.Item key={`${evento.code}-consumo`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`evento-consumo-${evento.code}`}
                      checked={evento.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            eventosSeguranca: eventosSeguranca.map(
                              (item: any) => {
                                if (item.code === evento.code) {
                                  item.enable = !item.enable
                                }

                                return item
                              },
                            ),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`evento-consumo-${evento.id}`}>
                      {evento.descricao_exibida}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}
        {/* <div className="mb-5">
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
              {eventosConsumo.map((evento: any) => (
                <Dropdown.Item key={`${evento.code}-consumo`}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`evento-consumo-${evento.code}`}
                      checked={evento.enable}
                      onChange={() => {
                        globalDispatch({
                          type: 'SET_DATA',
                          payload: {
                            eventosConsumo: eventosConsumo.map((item: any) => {
                              if (item.code === evento.code) {
                                item.enable = !item.enable
                              }

                              return item
                            }),
                          },
                        })
                      }}
                    />
                    <Label htmlFor={`evento-consumo-${evento.id}`}>
                      {evento.descricao_exibida}
                    </Label>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Flowbite>
        </div> */}
        <div className="mb-5">
          <label
            htmlFor="custom-multiselect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Eventos de Consumo
          </label>
          <SearchableSelect
            options={[
              ...eventosConsumo.map((evento: any) => ({
                label: evento.descricao_exibida,
                value: evento.code,
              })),
            ]}
            value={eventosConsumo
              .filter((evento: any) => evento.enable)
              .map((evento: any) => evento.code)}
            onChange={(valoreselecionado: any) => {
              globalDispatch({
                type: 'SET_DATA',
                payload: {
                  eventosConsumo: eventosConsumo.map((item: any) => {
                    item.enable = valoreselecionado.includes(item.code)
                    return item
                  }),
                },
              })
            }}
            placeholder="Nenhum Eventos de Consumo Selecionado"
          />
        </div>
      </div>
      <div className="ml-2 mr-2 gap-x-4 flex-wrap grid grid-cols-1 lg:grid-cols-5">
        <div className="mb-5">
          {!loading && (
            <Button
              color="blue"
              size="sm"
              className="flex justify-center items-center w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={fnBuscar}
            >
              Buscar
            </Button>
          )}
          {!!loading && (
            <button
              type="submit"
              className="flex justify-center items-center w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  )
}
