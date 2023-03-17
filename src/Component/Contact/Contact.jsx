import React from 'react'
import './Contact.css'

import { themeContext } from '../../context';
import { useContext } from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form">
        <div className="w-left" style={darkMode?{display: 'flex',flex: '1',justifyContent: 'center',height: '60vh'}:{}}>
              <div className="awesome">
                  <span style={darkMode?{color:'var(--blueCard)'}:{}}>Get in touch</span>
                  <span>Contact me</span>
                  <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
              </div>
          </div>
          <div className="c-right" style={darkMode?{background: 'rgba(245,195,44,0.1)',alignItems: 'center',height:'50vh',borderRadius:'20px',boxShadow: '-5px 10px 8px rgba(221, 248, 254, 0.3)',marginTop:'-3rem'}:{}}>
              <form action="">
                  <input type="text" placeholder='Name' className='user' style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}} />
                  <input type="email" placeholder='E-mail' className='user' style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}}/>
                  <textarea name="message" placeholder='Message' className="user" style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}}></textarea>
                  <input className='button' type="submit" value='Send' />
                  <div className="blur c-blur1" style={{background:'var(--purple'}}></div>
              </form>
          </div>
    </div>
  )
}

export default Contact
