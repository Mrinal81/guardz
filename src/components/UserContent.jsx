import React from 'react';
import footprint from "../assets/boot-print.png";
import cloud from "../assets/cloud.png";
import hacker from "../assets/hacker.png";
import email from "../assets/email.png";
import folder from "../assets/folder.png";
import completed from "../assets/completed.png"
import mark from "../assets/question-mark.png";
import check from "../assets/checkmark.png";

const UserContent = () => {
  const data = [
    { 
      col1: 'MA', 
      col2: 'abc@gmail.com', 
      col3: 'ABCD ARTED', 
      col4: "Low", 
      col5: mark,
      col6: mark, 
      col7: mark, 
      col8: check, 
      col9: mark, 
      col10:mark,
      col11:'N/A', 
    },
  ];

  return (
    <div className='userPage'>
      <div className='userHeader'>
        <div className="userButtons">
          <h2>Users (1)</h2>
          <div className="userworkbtns">
            <div className="left-btn">
            <button>search</button>
            <button>Filter</button>
            </div>
            <div className="right-btn">
              <button>Setting</button>
              <button>Share</button>
            </div>
          </div>
        </div>
        <div className="userBtn">
          <button>Status Active</button>
          <button>Clear All</button>
        </div>
        <div className='userCard'>
          <div className="usertablecontainer">
            <table>
              <thead>
                <tr className='thead'>
                  <th>Status</th>
                  <th>Email Address</th>
                  <th>Full Name</th>
                  <th>Risk Level</th>
                  <th><img src={cloud} alt="cloud-img" /></th>
                  <th><img src={cloud} alt="education-img" /></th>
                  <th><img src={folder} alt="folder-img" /></th>
                  <th><img src={hacker} alt="hacker-img" /></th>
                  <th><img src={email} alt="email-img" /></th>
                  <th><img src={completed} alt="completed-img" /></th>
                  <th>Last Activity Date</th>
                  <th>Groups</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <td key={cellIndex}>
                        {cell.includes('data:image') ? (
                          <img src={cell} alt={`img-${rowIndex}-${cellIndex}`} />
                        ) : (
                          // Otherwise, display the text
                          cell
                        )}
                      </td>
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

export default UserContent;
