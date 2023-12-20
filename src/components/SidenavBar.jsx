import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/brand.png";
import user from "../assets/user.png";
import monitor from "../assets/monitor.png";
import shield from "../assets/shield.png";
import home from "../assets/home.png";
import globe from "../assets/globe.png";
import mark from "../assets/question.png";
import education from "../assets/graduation.png"
import error from "../assets/error.png"

const SidenavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='sidenav'>
      <div className="nav-logo">
        <a href="#" className='img'>
          <img src={logo} alt="company-logo" className='logos' />
        </a>
      </div>
      <div className="links">
        <ul>
        <li className={`tooltip ${activeLink === 'home' ? 'active' : ''}`}>
            <Link to="/" onClick={() => handleLinkClick('home')}>
              <img src={home} alt="home icon" />
              <span className="tooltiptext">Home</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'protection' ? 'active' : ''}`}>
            <Link to="/protection" onClick={() => handleLinkClick('protection')} >
              <img src={shield} alt="protection" />
              <span className="tooltiptext">Security Controls</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'issues' ? 'active' : ''}`}>
            <Link to="/Issues" onClick={()=> handleLinkClick('issues')} >
            <img src={error} alt="Issues"/>
            <span className="tooltiptext">Issues</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'user' ? 'active' : ''}`}>
            <Link to="/user" onClick={()=> handleLinkClick('user')}>
            <img src={user} alt="user"/>
            <span className="tooltiptext">Users</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'monitor' ? 'active' : ''}`}>
            <Link to="/Monitor" onClick={()=> handleLinkClick('monitor')} >
            <img src={monitor} alt="monitor"/>
            <span className="tooltiptext">Devices</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'globe' ? 'active' : ''}`}>
            <Link to="/Globe" onClick={()=> handleLinkClick('globe')} >
            <img src={globe} alt="globe"/>
            <span className="tooltiptext">Internet Assets</span>
            </Link>
          </li>
          <li className={`tooltip ${activeLink === 'education' ? 'active' : ''}`}>
            <Link to="/Education" onClick={()=> handleLinkClick('education')} >
            <img src={education} alt="education"/>
            <span className="tooltiptext">Awarness</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottomnav">
        <div className="bottom-links">
          <a href="#">Pricing</a>
          <li style={{textAlign:"center"}}>
            <img src={mark} alt="mark" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default SidenavBar;
