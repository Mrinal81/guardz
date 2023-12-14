import React from 'react';
import footprint from "../assets/boot-print.png"
import arrow from "../assets/arrow.png"



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
const IssuesContent = () => {

  const totaldata=data.length;
  return (
    <div className='issuesPage'>
      <div className='issuesHeader'>
        <div className="headerButtons">
          <h2>Issues ({totaldata})</h2>
          <div className="workbtns">
            <div className='left-issue-btn'>
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='default'>
              <span><svg className='view' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>view-gallery</title><path d="M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z" /></svg>Default View</span>
              <img className='dropdown' src={arrow} alt="dropdown" /></button>
            <hr />
            <button className='filter'>
            <svg className='filter-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"/></svg>
              Filter
              </button>
            </div>
            <div className="issue-right-btn">
              <button><svg className='shareimg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
              </svg></button>
            </div>
          </div>
        </div>
        <div className="issuesBtn">
          <span className='sta'>Issue Status <hr /><button>{totaldata} Issue Statuses</button><svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
          <span className='sta'>Issue Serverity <hr /><button>4 Issue Serverities</button><svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
          <span className='clear'>Clear All <svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
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
