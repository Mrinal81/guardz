import React, { useState } from 'react';
import logo from "../assets/guardz-logos.png";
import user from "../assets/user.png";
import monitor from "../assets/monitor.png";
import shield from "../assets/shield.png";
import home from "../assets/home.png";
import globe from "../assets/globe.png";
import mark from "../assets/question-mark.png";

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
          <li className={activeLink === 'home' ? 'active' : ''}>
            <img src={home} alt="home icon" onClick={() => handleLinkClick('home')} />
          </li>
          <li className={activeLink === 'protection' ? 'active' : ''}>
            <img src={shield} alt="protection" onClick={() => handleLinkClick('protection')} />
          </li>
          <li className={activeLink === 'stop' ? 'active' : ''}>
            <img src={shield} alt="stop" onClick={() => handleLinkClick('stop')} />
          </li>
          <li className={activeLink === 'user' ? 'active' : ''}>
            <img src={user} alt="user" onClick={() => handleLinkClick('user')} />
          </li>
          <li className={activeLink === 'monitor' ? 'active' : ''}>
            <img src={monitor} alt="monitor" onClick={() => handleLinkClick('monitor')} />
          </li>
          <li className={activeLink === 'globe' ? 'active' : ''}>
            <img src={globe} alt="globe" onClick={() => handleLinkClick('globe')} />
          </li>
          <li className={activeLink === 'education' ? 'active' : ''}>
            <img src={user} alt="education" onClick={() => handleLinkClick('education')} />
          </li>
        </ul>
      </div>
      <div className="bottomnav">
        <div className="bottom-links">
          <a href="#">Pricing</a>
          <li>
            <img src={mark} alt="mark" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default SidenavBar;
