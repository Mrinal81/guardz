import React from 'react';
import footprint from "../assets/boot-print.png"

const IssuesContent = () => {
  const data = [
    { 
      col1: 'External FootPrint Scan', 
      col2: 'Email Domain Missing DMARC', 
      col3: '1 Domain missing a DMARC record', 
      col4: 'Open', 
      col5: 'Medium', 
      col6: 'Dec 08, 2023 02:39 pm', 
    },
    { 
      col1: 'External FootPrint Scan', 
      col2: 'Email Domain Missing DKIM', 
      col3: '1 Domain missing a DKIM record', 
      col4: 'Open', 
      col5: 'Medium', 
      col6: 'Dec 08, 2023 02:39 pm',
    },
  ];

  return (
    <div className='issuesPage'>
      <div className='issuesHeader'>
        <div className="headerButtons">
          <h2>Issues (2)</h2>
          <div className="workbtns">
            <div className='left-btn'>
            <button>search</button>
            <button>Default View</button>
            <button>Filter</button>
            </div>
            <div className="right-btn">
              <button>Share</button>
            </div>
          </div>
        </div>
        <div className="issuesBtn">
          <button>Issue Status 2 Issue Statuses</button>
          <button>Issue Serverity  4 Issue Serverities</button>
          <button>Clear All</button>
        </div>
        <div className='issuesCard'>
          <div className="tablecontainer">
          <table>
            <thead>
              <tr>
                <th style={{width:"40px", height:"40px"}}><input type='checkbox' /></th>
                <th>Security Control</th>
                <th>Type</th>
                <th>Title</th>
                <th>Status</th>
                <th>Severity</th>
                <th>Creation Date</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td style={{width:"40px", height:"40px"}}><input type="checkbox" /></td>
                  {Object.values(row).map((cell, cellIndex) => (
                    <>
                    <td key={cellIndex}>{cell}</td>
                    </>
                    ))}
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

export default IssuesContent;
