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
  },
  {
    img:monitor,
    title:0,
    name:"Devices",
  },
  {
    img:email,
    title:0,
    name:"Mailboxes",
  },
  {
    img:completed,
    title:0,
    name:"Browsers",
  },
  {
    img:folder,
    title:0,
    name:"Cloud Drives",
  },
  {
    img:globe,
    title:6,
    name:"Internet Assets",
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
                    <div className="list-img">
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
            <span></span>
          </div>
          <div className="insurance">
            <div className="insurance-content">
            <h4>Cyber Insurance</h4>
            <a href="#">
            <img src={user} alt="user" />
            </a>
            <button>Request Quote</button>
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