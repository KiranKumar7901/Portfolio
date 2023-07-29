import React from 'react'
import './Footer.css'
import wave1 from '../Images/wave1.png'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

import { themeContext } from '../../context'
import { useContext } from 'react'

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
      <div className="footer" style={darkMode?{zIndex: 0}:{}}>
      <img src={wave1} alt="" style={{width: '100%'}}/>
      <div className="f-content" style={darkMode?{color:'black'}:{}}>
        <span> <a href="mailto:kirankumar992001@gmail.com" style={darkMode?{color: 'black'}:{}}>kirankumar992001@gmail.com</a></span>
        <span><a href="tel:+917906533864" style={darkMode?{color: 'black'}:{}}>+91-7906533864</a></span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kiran-kumar-514793179"><LinkedIn size='3rem' style={darkMode?{color:'black'}:{color: 'white'}}/></a>
          <a href="https://github.com/KiranKumar7901"><GitHub style={darkMode?{color:'black'}:{color: 'white'}} size='3rem'/></a>
          <a href="https://instagram.com/_karanprajapati_01?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3d"><Instagram style={darkMode?{color:'black'}:{color: 'white'}} size='3rem'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
