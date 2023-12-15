// RadarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {


    const data = {
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
        legend: { display: false },
        tooltip: { enabled: false },
      },
      elements: {
        arc: {
          backgroundColor: 'transparent',
        },
      },
      animation: {
        animateRotate: false,
      },
    };

    const radarChart = new Chart(chartRef.current, {
      type: 'polarArea',
      data: data,
      options: options,
    });

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
      radarChart.destroy();
    };
  }, []);

  return (
    <div className='radar-canvas'>
      <canvas ref={chartRef} />
    </div>
  );
};

export default RadarChart;
