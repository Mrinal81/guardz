import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/brand.png";
import user from "../assets/user.png";
import monitor from "../assets/monitor.png";
import shield from "../assets/shield.png";
import home from "../assets/home.png";
import globe from "../assets/globe.png";
import mark from "../assets/question-mark.png";
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
        <li className={activeLink === 'home' ? 'active' : ''}>
            <Link to="/" onClick={() => handleLinkClick('home')}>
              <img src={home} alt="home icon" />
            </Link>
          </li>
          <li className={activeLink === 'protection' ? 'active' : ''}>
            <Link to="/protection" onClick={() => handleLinkClick('protection')}>
              <img src={shield} alt="protection" />
            </Link>
          </li>
          <li className={activeLink === 'issues' ? 'active' : ''}>
            <Link to="/Issues" onClick={()=> handleLinkClick('issues')}>
            <img src={error} alt="Issues"/>
            </Link>
          </li>
          <li className={activeLink === 'user' ? 'active' : ''}>
            <Link to="/user" onClick={()=> handleLinkClick('user')}>
            <img src={user} alt="user"/>
            </Link>
          </li>
          <li className={activeLink === 'monitor' ? 'active' : ''}>
            <Link to="/Monitor" onClick={()=> handleLinkClick('monitor')}>
            <img src={monitor} alt="monitor"/>
            </Link>
          </li>
          <li className={activeLink === 'globe' ? 'active' : ''}>
            <Link to="/Globe" onClick={()=> handleLinkClick('globe')}>
            <img src={globe} alt="globe"/>
            </Link>
          </li>
          <li className={activeLink === 'education' ? 'active' : ''}>
            <Link to="/Education" onClick={()=> handleLinkClick('education')}>
            <img src={education} alt="education"/>
            </Link>
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
