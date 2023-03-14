import React from 'react'
import './Footer.css'
import wave from '../Images/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import FaceBook from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
      <div className="footer">
      <img src={wave} alt="" style={{ width: '100%'}} />
      <div className="f-content">
        <span>kirankumar992001@gmail.com</span>
        <div className="f-icons">
          <Instagram color='white' size='3rem'/>
          <FaceBook color='white' size='3rem'/>
          <GitHub color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
