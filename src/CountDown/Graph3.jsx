import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Graph3 (){
  const series= [
    {
    name: "BTC Price",
    data: [0.01, 12.35, 657.1, 9000, 46700]
    },
  {
    name:'Reward Halving',
    data: [50, 25, 12.5, 6.25, 3.125]

  }
];
const options= {
  chart: {
    height: 350,
    type: 'line',
    background:'#F2ECF4',
    zoom: {
      enabled: false
    },
  stroke:{
    curve:'stepline'
  }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Halving Events Impact On BTC Price',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#c2bfa27a', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2
    },
  },
  xaxis: {
    categories: [2009, 2012, 2016, 2020, 2024],
    
  },

  yaxis: [
    {
        seriesName: "BTC Price",
        axisTicks: {
            show: true
        },
        axisBorder: {
            show: true,
            color: "#008FFB"
        },
        labels: {
            style: {
                colors: ["#008FFB"]
            }
        },
        title: {
            text: "BTC Price",
            style: {
                color: "#008FFB"
            }
        },
        tooltip: {
            enabled: true
        }
    },
    {
      seriesName: "Reward Halving",
      opposite: true,
      axisTicks: {
          show: true
      },
      axisBorder: {
          show: true,
          color: ""
      },
      labels: {
          style: {
              colors: ["#000"]
          }
      },
      title: {
          text: "Reward Halving",
          style: {
              color: "#000"
          }
      },
      tooltip: {
          enabled: true
      }
  },
  ],




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

      
        
      
        
    ],
    xaxis: [
      {
        x: 2020,
        
        borderColor: '#775DD0',
        label: {
          
          text: '6.25 Reward'
        }
      },
      {
        x: 2009,
        
        borderColor: '#775DD0',
        label: {
          
          text: '50 Reward'
        }
      },
      {
        x: 2012,
        
        borderColor: '#775DD0',
        label: {
          
          text: '25 Reward'
        }
      },
      {
        x: 2016,
        
        borderColor: '#775DD0',
        label: {
          
          text: '12.5 Reward'
        }
      },
      {
        x: 2024,
        
        borderColor: '#775DD0',
        label: {
          
          text: '3.125 Reward'
        }
      },

    ]
  }
}
  
  return(
    <div>
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  )
}

export default Graph3;
