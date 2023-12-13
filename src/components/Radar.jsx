import { useState } from 'react';

const Radar = () => {
  const calculateCoordinates = (angle) => {
    const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
    const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const [hoveredSlice, setHoveredSlice] = useState(null);

  const lines = [
    { angle: 0 },
    { angle: 45 },
    { angle: 90 },
    { angle: 135 },
    { angle: 180 },
    { angle: 225 },
    { angle: 270 },
    { angle: 315 },
    { angle: 360 },
  ];

  return (
    <div className='radar-system'>
      <svg width='50%' height='50%' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='100' cy='100' r='90' fill='transparent' stroke='gray' strokeWidth='.2' stroke-dasharray='5,5' stroke-dashoffset='0' />

        {lines.map((line, index) => {
          const nextIndex = (index + 1) % lines.length; // Get the next index to close the loop
          const { x: startX, y: startY } = calculateCoordinates(line.angle);
          const { x: endX, y: endY } = calculateCoordinates(lines[nextIndex].angle);

          return (
            <g key={index}>
              <line
                x1='50%'
                y1='50%'
                x2={`${startX}%`}
                y2={`${startY}%`}
                stroke={hoveredSlice === index ? 'red' : '#ccc'}
                strokeWidth='.2'
                onMouseOver={() => setHoveredSlice(index)}
                onMouseOut={() => setHoveredSlice(null)}
              />
              <polygon
                points={`50%,50% ${startX}%,${startY}% ${endX}%,${endY}%`}
                fill={hoveredSlice === index ? '#654fe8' : 'transparent'}
                strokeWidth='.2'
                stroke='#ccc'
                onMouseOver={() => setHoveredSlice(index)}
                onMouseOut={() => setHoveredSlice(null)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Radar;
