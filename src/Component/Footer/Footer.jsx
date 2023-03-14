import React from 'react'
import './Footer.css'
import wave from '../Images/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import FaceBook from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

import { themeContext } from '../../context'
import { useContext } from 'react'

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
      <div className="footer" >
      <img src={wave} alt="" style={{ width: '100%'}} />
      <div className="f-content" style={darkMode?{color:'black'}:{}}>
        <span>kirankumar992001@gmail.com</span>
        <div className="f-icons">
          <Instagram size='3rem' style={darkMode?{color:'black'}:{color: 'white'}}/>
          <GitHub style={darkMode?{color:'black'}:{color: 'white'}} size='3rem'/>
          <FaceBook style={darkMode?{color:'black'}:{color: 'white'}} size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
