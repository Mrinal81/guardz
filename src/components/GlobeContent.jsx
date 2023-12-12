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
          <h2>Internet Assets (6)</h2>
          <div className="globeworkbtns">
            <button>search</button>
            <button>Filter</button>            
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
