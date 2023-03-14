import React from 'react'
import './Intro.css'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import blue from '../Images/1.png'
import orange from '../Images/2.png'
import boy from '../Images/3.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import crown from '../Images/crown.png'
import award from '../Images/award.png'
import cmh from '../Images/cmh.png'

import { themeContext } from '../../context'
import { useContext } from 'react'

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span style={{ color: darkMode ? 'var(--blueCard)' : '' }}>Hi! I am</span>
                  <span>Kiran Kumar</span>
                  <span style={{color:darkMode?'var(--blueCard)':''}}>Frontend Web Developer <br />Languages Known: HTML, CSS, JavaScript, C, C++ </span>
              </div>
              <button className="button i-button">Hire Me</button>
              <div className="i-icons" style={{ color: darkMode ? 'var(--orange)' : '' }} >
                  <Instagram/>
                  <GitHub/>
                  <LinkedIn />
              </div>
          </div>
          <div className="i-right">
              <img src={orange} alt="" />
              <img src={blue} alt="" />
              <img src={boy} alt="" />
              <img src={cmh} alt="" />
              <div style={{ top: '-4%' , left: '68%' }}>
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
              </div>
              <div style={{ top: '18rem' , left: '0rem' }}>
                  <FloatingDiv image={award} txt1='Best Design' txt2='Award'/>
              </div>
              {/* blur div */}
              <div className="blur" style={{ background: 'rgb(238,210,255' }}></div>
              <div className="blur" style={{background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
          </div>
    </div>
  )
}

export default Intro
