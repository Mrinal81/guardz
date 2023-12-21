// RadarChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

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
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
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
      onHover: (event, chartElement) => {
        const tooltip = document.getElementById('custom-tooltip');
        if (chartElement[0]) {
          const sliceIndex = chartElement[0].index;
          const label = data.labels[sliceIndex];
          const value = data.datasets[0].data[sliceIndex];

          const btnsLinks = document.querySelector('.issues-btns-links');

          if (sliceIndex === 1 || sliceIndex === 2) {
            tooltip.innerHTML = `
              <div>${label}</div>
              <div>${btnsLinks.children[1].innerHTML}</div>
              <div>${btnsLinks.children[2].innerHTML}</div>
            `;
          } else {
            tooltip.innerHTML = `
              <div>${label}</div>
              <div>${btnsLinks.children[0].innerHTML}</div>
              <div>${btnsLinks.children[2].innerHTML}</div>
            `;
          }

          tooltip.style.display = 'block';
        } else {
          tooltip.style.display = 'none';
        }
      },
    };

    if (chartRef.current?.chart) {
      chartRef.current.chart.destroy();
    }

    const radarChart = new Chart(chartRef.current, {
      type: 'polarArea',
      data: data,
      options: options,
    });

    chartRef.current.chart = radarChart;

    return () => {
      if (chartRef.current?.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className='radar-canvas'>
      <canvas ref={chartRef} />
      <div
        id="custom-tooltip"
        style={{
          display: 'none',
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          fontSize: '10px',
          top: '180px',
          left: '120px',
          borderRadius: '5px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
          width: '130px',
          height: '80px',
          
        }}
      ></div>
    </div>
  );
};

export default RadarChart;
