import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidenavBar from './SidenavBar'
import MainContent from './MainContent'
import ProtectionContent from './ProtectionContent';
import GlobeContent from './GlobeContent';
import EducationContent from './EducationContent'
import MonitorContent from './MonitorContent'
import StopContent from './StopContent'
import UserContent from './UserContent'
import IssuesContent from './IssuesContent';

const Main = () => {
  return (
    <Router>
      <div className='main'>
        <SidenavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/protection" element={<ProtectionContent />} />
          <Route path="/Issues" element={<IssuesContent />} />
          <Route path="/User" element={<UserContent />} />
          <Route path="/Monitor" element={<MonitorContent />} />
          <Route path="/Globe" element={<GlobeContent />} />
          <Route path="/Education" element={<EducationContent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main