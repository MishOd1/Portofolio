import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css'

function Graph2 (){
  const series= [{
    name:'BTC Reward Halving',
    data: [50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125, 0.390625, 0.1953125, 0.09765625, 0.048828125],

  }
];
  const options= {
    chart: {
      type: 'line',
      height: 350,
      background:'#F2ECF4',
      index:-99,
      
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'BTC Reward Halving 2009-2048',
      align: 'left'
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    xaxis: {
      categories: [2009, 2012, 2016, 2020, 2024, 2028, 2032,2036, 2040, 2044, 2048],
    },
    annotations: {
      yaxis: [
        {
          title: {
            text: "BTC Reward Halving"
          },
        },
        {
          opposite: true,
          title: {
            text: "BTC Price"
          }
        },

        {
          y: 6.25,
          borderColor: "#000000",
          label: {
            borderColor: " #000000",
            style: {
              color: " #000000",
              background: "#00E396"
            },
            text: "6.25 Reward"
          },
          

          
        },
        {
          y: 3.125,
          borderColor: "#000000",
          label: {
            borderColor: " #000000",
            style: {
              color: " #000000",
              background: "#00E396",
              
              
            },
            text: "3.125 in 2024",
            
          }
        }
          
      ],
      xaxis: [
        {
          x: 2020,
          x2: 2024,
          fillColor: '#00000',
          label: {
            text: 'We Are Here'
          }
        }
      ]
    }
    
  }
  return(
    <div className='Graph2'>
         <p className='text-[15px]  text-gray-500 mt-16 text-left mb-0 '>
        in the following chart we can see the drop in bitcoins's reward on each halving event:
      </p>
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  )
}

export default Graph2;
