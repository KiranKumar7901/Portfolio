import React from 'react'
import './Experience.css'

import { themeContext } from '../../context';
import { useContext } from 'react';

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
      <div className="experience">
          <div className="achievement">
              <div className="circle" style={darkMode?{background: 'linear-gradient(to bottom,#87e6fb 0%,#ffccbb 100%)', border:'10px solid var(--gray)'}:{}}>4+</div>
              <span style={darkMode?{color:'var(--orange)'}:{}}>Projects</span>
              <span style={darkMode?{color:'var(--gray)'}:{}}>Completed</span>
          </div>
          <div className="achievement">
              <div className="circle" style={darkMode?{background: 'linear-gradient(to bottom,#87e6fb 0%,#ffccbb 100%)', border:'10px solid var(--gray)'}:{}}>0+</div>
              <span style={darkMode?{color:'var(--orange)'}:{}}>Years</span>
              <span style={darkMode?{color:'var(--gray)'}:{}}>Experience</span>
          </div>
          <div className="achievement">
              <div className="circle" style={darkMode?{background: 'linear-gradient(to bottom,#87e6fb 0%,#ffccbb 100%)', border:'10px solid var(--gray)'}:{}}>4+</div>
              <span style={darkMode?{color:'var(--orange)'}:{}}>Certificates</span>
              <span style={darkMode?{color:'var(--gray)'}:{}}>Completed</span>
          </div>
    </div>
  )
}

export default Experience
