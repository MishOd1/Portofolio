import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './style.css'

export default function Graph(){
  const series= [{
    name: '100 USD Value',
    type: 'column',
    data: [100, 91, 85, 69, 61]
  }, {
    name: 'BTC Reward Halving',
    type: 'column',
    data: [50, 25, 12.5, 6.25, 3.125]
  }, {
    name: '1 BTC price',
    type: 'line',
    data: [0.01, 12, 657, 9000, 16200]
  }];
  const options= {
    chart: {
      height: 1350,
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: 'correlation bettwen BTC Price and BTC halving and inflation',
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: [2009, 2012, 2016, 2020, 2024],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            colors: '#008FFB',
          }
        },
        title: {
          text: "100 USD value",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            colors: '#00E396',
          }
        },
        title: {
          text: "BTC Reward Halving",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019'
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: "1 BTC Price",
          style: {
            color: '#FEB019',
          }
        }
      },
    ],
  
    tooltip : {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  }  
    return(
      <div className='-z-999'>
         <ReactApexChart options={options} series={series} type="line" height={700} />
      </div>
    )
}