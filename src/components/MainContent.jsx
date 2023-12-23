import React from 'react'
import user from "../assets/user.png";
import globe from "../assets/globe.png";
import monitor from "../assets/monitor.png";
import folder from "../assets/folder.png";
import completed from "../assets/completed.png"
import email from "../assets/email.png";

import BottommainContent from './BottommainContent';


const data=[
  {
    img:user,
    title:1,
    name:"Users",
    tooltip: 'Guardz is actively monitoring users from Google or Microsoft cloud directories.',
  },
  {
    img:monitor,
    title:0,
    name:"Devices",
    tooltip: 'Guardz is actively securing endpoints (Windows & Mac) via device agents.',
  },
  {
    img:email,
    title:0,
    name:"Mailboxes",
    tooltip: 'Guardz is actively monitoring all email Gmail or Exchange.',
  },
  {
    img:completed,
    title:0,
    name:"Browsers",
    tooltip: 'Guardz is actively monitoring web activity via browser extensions.',
  },
  {
    img:folder,
    title:0,
    name:"Cloud Drives",
    tooltip: 'Guardz is actively monitoring file sharing from personal & shared cloud drives (OneDrive, Sharepoint, Google Drive, etc).',
  },
  {
    img:globe,
    title:6,
    name:"Internet Assets",
    tooltip: 'Guardz is actively monitoring domains and IPs via external footprint scans.',
  },
]

const MainContent = () => {
  return (
    <div className='main-content'>
      <div className="maincontent">
        <div className="card">
          <ul className='list-container'>
            {data.map((item,index)=>{
              return (
                <li key={index}>
                  <div className="list">
                    <div className="list-img main-tooltip">
                    <span className="main-tooltiptext">{item.tooltip}</span>
                    <img src={item.img} alt={item.name}/>
                    </div>
                    <div className="list-details">
                      <h2>{item.title}</h2>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="status">
          <div className="status-content">
            <div className="bar">
          <div className="statusbar">
            <div className="status-para1">
              <p>Insurance Threshold</p>
              <span className='status-values1'>80</span>
              <div className="line1"></div>
              
            </div>
            <span className='spanbar'></span>
          <div className="status-para">
          <div className="line"></div>
              <div className="circle-line"></div>
            <span className='status-values2'>25</span>
            <p className='p'>Your Business</p>
          </div>
          </div>
          <div className="insurance">
            <div className="insurance-content">
            <h4>Cyber Insurance</h4>
            <a href="#">
            <img src={user} alt="user" />
            </a>
            <button className='req'>Request Quote</button>
            </div>
          </div>
          </div>
          </div>
        </div>

      </div>
      <BottommainContent />
    </div>

  )
}

export default MainContent