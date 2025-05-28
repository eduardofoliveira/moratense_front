import { useState } from 'react'
import Chart from 'react-apexcharts'

export const EventosConsumo = (props: any) => {
  const { resumoConsumo } = props

  const [options] = useState({
    // fill: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    colors: [
      '#001A7A',
      '#5D69DD',
      // '#33b2df',
      // '#546E7A',
      // '#d4526e',
      // '#13d8aa',
      // '#A5978B',
      // '#2b908f',
      // '#f9a3a4',
      // '#90ee7e',
      // '#f48024',
      // '#69d2e7',
    ],
    plotOptions: {
      bar: {
        // barHeight: '100%',
        distributed: true,
        borderRadius: 5,
        borderRadiusApplication: 'end' as 'end' | 'around', // 'around', 'end'
        // horizontal: true,
        // dataLabels: {
        //   position: false,
        // },
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: any) => `${val}`,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#000'],
      },
      position: 'top',
    },
    // dataLabels: {
    //   enabled: false,
    // },
    // markers: {
    //   colors: ['#F44336', '#E91E63', '#9C27B0'],
    // },
    chart: {
      id: 'basic-bar',
      // type: 'bar',
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: (val: any) => `${val}%`,
      },
    },
    xaxis: {
      categories: resumoConsumo.map((item: any) => item.nome),

      //   '(RT) Aceleração Brusca',
      //   '(RT) Banguela',
      //   '(RT) Excesso de Rotação',
      //   '(RT) Excesso de Velocidade',
      //   '(RT) Fora da Faixa Verde',
      //   '(RT) Inércia',
      //   '(RT) Marcha Lenta Excessiva',
      //   '(RT) Uso indevido pedal acelerador 85%',
      // ],
    },
    legend: {
      show: false,
      // position: 'top',
      // horizontalAlign: 'left',
      // offsetX: 40,
    },
  })
  const [series] = useState([
    {
      name: 'Quantidade',
      data: resumoConsumo.map((item: any) => item.quantidade),
    },
  ])

  return (
    <div className="bg-white ml-2 mr-2 rounded-md p-2 pb-6 flex flex-col justify-center items-start">
      <h1>Eventos de Consumo</h1>
      <Chart
        options={options}
        series={series}
        colors={['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B']}
        type="bar"
        // width="100%"
        height="200%"
        className="w-full"
      />
    </div>
  )
}
