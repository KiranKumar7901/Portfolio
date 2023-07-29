import React, { useState } from 'react'
import './Contact.css'
import check from "../Images/checked.png";

import { themeContext } from '../../context';
import { useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
  const [done, setDone] = useState(false);
  
  const Modal = () => {
      return (
        <>
          <div className="m-wrapper" onClick={()=>setDone(false)} style={darkMode?{backgroundColor:"rgba(0, 0, 0, 0.9)"}:{}}></div>
            <div className="m-container" style={darkMode?{border:'3px solid orange'}:{}}>    
            <p style={darkMode?{color: 'black'}:{}}>Thank for Contacting Me!!!</p>
            <img src={check } alt="Check" />
          <button className='button m-button' style={{cursor: 'pointer'} } onClick={()=>setDone(false)}>Close</button>
          </div>
      </>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bh6byfm', 'template_r0hlorl', form.current, 'M6h-2kT09Bns5ZOwd')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left" style={{display: 'flex',flex: '1',justifyContent: 'center',height: '50vh'}}>
              <div className="awesome w-left">
                  <span style={darkMode?{color:'var(--blueCard)'}:{}}>Get in touch</span>
                  <span>Contact me</span>
                  <div className="blur c-blur1" style={{background: "#fca71fab"}}></div>
              </div>
          </div>
          <div className="c-right" style={darkMode?{background: 'rgba(245,195,44,0.1)',alignItems: 'center',height:'50vh',borderRadius:'20px',boxShadow: '-5px 10px 8px rgba(221, 248, 254, 0.1)',marginTop:'-3rem', padding: '2rem 1rem 0rem 1rem',zIndex:1}:{}}>
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name='user-name' placeholder='Name' className='user' style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}} />
                  <input type="email" name='user-email' placeholder='E-mail' className='user' style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}}/>
                  <textarea name="message" placeholder='Message' className="user" style={darkMode?{background:'rgba(255,255,255,0.1)',border:'2px solid var(--gray)',color:'var(--blueCard)'}:{}}></textarea>
                  <button className='button c0-button' type="submit">Send</button>
          <div className="blur c-blur2" style={darkMode ? { background: 'none' }:{ background: 'var(--purple' }}></div>
                  <span>{done && <Modal/>}</span>
              </form>
          </div>
    </div>
  )
}

export default Contact
