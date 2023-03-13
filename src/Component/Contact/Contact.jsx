import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
        <div className="w-left">
              <div className="awesome">
                  <span>Get in touch</span>
                  <span>Contact me</span>
                  <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
              </div>
          </div>
          <div className="c-right">
              <form action="">
                  <input type="text" placeholder='Name' className='user' />
                  <input type="email" placeholder='E-mail' className='user' />
                  <textarea name="message" placeholder='Message' className="user"></textarea>
                  <input className='button' type="submit" value='Send' />
                  <div className="blur c-blur1" style={{background:'var(--purple'}}></div>
              </form>
          </div>
    </div>
  )
}

export default Contact
