// RadarChart.js
import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';
import {customTooltipPlugin} from  './CustomTooltipPlugin';




const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {


    const data = {
      labels: ['Cloud Posture', 'External Footprint', 'Dark Web', 'Cloud Data', 'Email Protection', 'Endpoint Security', 'Secure Browsing', 'Security Awareness', 'Phishing Simulation'],
      datasets: [{
        data: Array(9).fill(1),
        borderColor: (context) => {
          const index = context.dataIndex;
          return (index === 1 || index === 2) ? '#654fe8' : 'lightgray';
        },
        borderWidth: (context) => {
          const index = context.dataIndex;
          return (index === 1 || index === 2) ? 2 : 1
        },
        hoverBorderColor: '#654fe8',
        hoverBorderWidth: 4,
        hoverBackgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, 'rgba(255,255,255,0.3534663865546218)');
          gradient.addColorStop(1, 'rgba(167,154,242,0.23021708683473385)');
          return gradient;
        },
        backgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === 1 || index === 2) {
            const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, 'rgba(255,255,255,0.3534663865546218)');
            gradient.addColorStop(1, 'rgba(167,154,242,0.23021708683473385)');
            return gradient;
          } else {
            return 'transparent';
          }
        },
      }],
    };

    const options = {
      scales: {
        r: {
          ticks: { display: false },
          suggestedMin: 0,
        },
      },
      plugins: {
        customTooltip: {
          enabled: true,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          titleColor: '#333',
          bodyColor: '#555',
          borderColor: '#ddd',
          borderWidth: 1,
          cornerRadius: 5,
          padding: 10,
          callbacks: {
            title: () => '',
            label: (tooltipItem) => {
              const label = data.labels[tooltipItem.dataIndex];
              const value = tooltipItem.formattedValue || data.datasets[0].data[tooltipItem.dataIndex];
              return `${label}: ${value}`;
            },
          },
        },
        legend: {
          display:false,
        }
      },
      elements: {
        line: {
          borderWidth: 2,
          borderColor: '#654fe8',
          backgroundColor: 'rgba(101, 79, 232, 0.2)',
          fill: true,
        },
      },
      animation: {
        animateRotate: false,
      },
     
    };
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const radarChart = new Chart(chartRef.current, {
      type: 'polarArea',
      data: data,
      options: options,
      plugins: [customTooltipPlugin],
    });
  
    chartRef.current.chart = radarChart;
  

    const slices = radarChart.getDatasetMeta(0).data;

    const handleMouseEnter = (event, element) => {
      element.options.borderWidth = element.options.hoverBorderWidth || 4;
      element.options.backgroundColor = element.options.hoverBackgroundColor || '';
      // element.options.borderDash = [];
      radarChart.update();
    };

    const handleMouseLeave = (event, element) => {
      element.options.borderWidth = element.options.originalBorderWidth || 1;
      element.options.backgroundColor = '';
      // element.options.borderDash = [];
      radarChart.update();
    };

    slices.forEach((slice) => {
      slice.options.originalBorderWidth = slice.options.borderWidth;
      slice.options.originalBoxShadow = slice.options.boxShadow || 'none';
      slice.$listeners = {
        mouseenter: (event) => handleMouseEnter(event, slice),
        mouseleave: (event) => handleMouseLeave(event, slice),
      };
    });

    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className='radar-canvas'>
      <canvas ref={chartRef} />
    </div>
  );
};

export default RadarChart;
