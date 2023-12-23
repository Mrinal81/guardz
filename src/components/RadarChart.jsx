// RadarChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import globe from "../assets/globe.png";
import monitor from "../assets/monitor.png";
import Radar from './RadarChart';
import arrow from "../assets/arrow.png"
import cloud from "../assets/cloud.png";
import boot from "../assets/boot.png"
import hacker from "../assets/hacker1.png"
import folder from "../assets/folder.png"
import email from "../assets/email.png"
import complete from "../assets/completed.png"
import education from "../assets/graduation.png"
import phishing from "../assets/phishing-hook.png"
import error from "../assets/serror.png";
import task from "../assets/task.png";
import RotatingCircle from './RotatingCircle';

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
              <div style="padding: 2px 0px;">${label}</div>
              <div style="display: flex; gap: 5px; padding: 2px 0px;">${btnsLinks.children[1].innerHTML}</div>
              <div style="display: flex; gap: 5px; padding: 2px 0px;">${btnsLinks.children[2].innerHTML}</div>
            `;
          } else {
            tooltip.innerHTML = `
              <div  style="padding: 2px 0px;">${label}</div>
              <div style="display: flex; gap: 5px; padding: 2px 0px;">${btnsLinks.children[0].innerHTML}</div>
              <div style="display: flex; gap: 5px; padding: 2px 0px;">${btnsLinks.children[2].innerHTML}</div>
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
      <RotatingCircle />
        <div className='system'>
              <div className='content9 content'>
                    <div className="system-img">
                    <p>Phishing Simulation</p>
                    <div className="sys-img">
                    <img className='content-img' src={phishing} alt="cloud-img" />
                    </div>
                    </div>
                </div>
                <div className='content1 content'>
                    <div className="system-img">
                    <p>Cloud Posture</p>
                    <div className="sys-img">
                    <img className='content-img' src={cloud} alt="cloud-img" />
                    </div>
                    </div>
                </div>
                <div className='content2 content'>
                    <div className="system-img">
                    <p>External Footprint</p>
                    <div className="sys-img">
                    <img className='content-img content-style' src={boot} alt="cloud-img" />
                    </div>
                    </div>
                </div>
                <div className='content3 content'>
                    <div className="system-img">
                    <div className="sys-img">
                    <img className='content-img content-style' src={hacker} alt="cloud-img" />
                    </div>
                    <p>Dark WEb</p>
                    </div>
                </div>
                <div className='content4 content'>
                    <div className="system-img">
                    <div className="sys-img">
                    <img className='content-img' src={folder} alt="cloud-img" />
                    </div>
                    <p>Cloud Data</p>
                    </div>
                </div>
                <div className='content5 content'>
                    <div className="system-img">
                    <div className="sys-img">
                    <img className='content-img' src={email} alt="cloud-img" />
                    </div>
                    <p>Email</p>
                    </div>
                </div>
                <div className='content6 content'>
                    <div className="system-img">
                    <div className="sys-img">
                    <img className='content-img' src={monitor} alt="cloud-img" />
                    </div>
                    <p>Endpoint Security</p>
                    </div>
                </div>
                <div className='content7 content'>
                    <div className="system-img">
                    <div className="sys-img">
                    <img className='content-img' src={complete} alt="cloud-img" />
                    </div>
                    <p>Secure Browsing</p>
                    </div>
                </div>
                <div className='content8 content'>
                    <div className="system-img">
                    <p>Security Awarness</p>
                    <div className="sys-img">
                    <img className='content-img' src={education} alt="cloud-img" />
                    </div>
                    </div>
                </div>
               

              </div> 
    </div>
  );
};

export default RadarChart;