import {useState} from 'react';
import check from "../assets/checkmark.png";



const data = [
  { 
    col1: '185.230.63.171', 
    col2: 'IP', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
  { 
    col1: '185.230.63.107', 
    col2: 'IP', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
  { 
    col1: '34.149.87.45', 
    col2: 'IP', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
  { 
    col1: '185.230.63.186', 
    col2: 'IP', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
  { 
    col1: 'deepdefend.tech', 
    col2: 'Domain', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
  { 
    col1: 'www.deepdefend.tech', 
    col2: 'Sub-domain', 
    col3: 'US United States', 
    col4: check, 
    col5: "Active",
    col6: "",
  },
];


const GlobeContent = () => {
  const [hoveredRows, setHoveredRows] = useState(Array(data.length).fill(false));
  const totallength=data.length;

  const handleMouseEnter = (rowIndex) => {
    const updatedHoveredRows = [...hoveredRows];
    updatedHoveredRows[rowIndex] = true;
    setHoveredRows(updatedHoveredRows);
  };

  const handleMouseLeave = (rowIndex) => {
    const updatedHoveredRows = [...hoveredRows];
    updatedHoveredRows[rowIndex] = false;
    setHoveredRows(updatedHoveredRows);
  };


  return (
    <div className='globePage'>
      <div className='globeHeader'>
        <div className="globeButtons">
          <h2>Internet Assets ({totallength})</h2>
         
          <div className="globeworkbtns">
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='filter'>Filter</button>
          </div>
        </div>
        <div className='globeCard'>
          <div className="globetablecontainer">
            <table>
              <thead>
                <tr className='thead'>
                  <th>Asset</th>
                  <th>Type</th>
                  <th>Geo-location</th>
                  <th>Issues</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onMouseEnter={() => handleMouseEnter(rowIndex)}
                  onMouseLeave={() => handleMouseLeave(rowIndex)}
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {cell.includes('data:image') ? (
                        <img src={cell} alt={`img-${rowIndex}-${cellIndex}`} />
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                  {hoveredRows[rowIndex] && (
                    <td>
                      <button className='hoverbtn'>Custom Button</button>
                    </td>
                  )}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobeContent;