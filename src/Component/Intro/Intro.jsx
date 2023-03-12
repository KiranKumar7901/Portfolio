import React from 'react'
import './Intro.css'
import GitHub from '../Images/github.png'
import LinkedIn from '../Images/linkedin.png'
import Instagram from '../Images/instagram.png'
import blue from '../Images/1.png'
import orange from '../Images/2.png'
import boy from '../Images/3.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import crown from '../Images/crown.png'
import award from '../Images/award.png'
import cmh from '../Images/cmh.png'

const Intro = () => {
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>Hi! I am</span>
                  <span>Kiran Kumar</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vel mollitia quasi cupiditate illo nam recusandae totam minus iste at blanditiis, minima veritatis obcaecati! Soluta itaque rerum earum! Quis, nemo.</span>
              </div>
              <button className="button i-button">Hire Me</button>
              <div className="i-icons">
                  <img src={GitHub} alt="" />
                  <img src={Instagram} alt="" />
                  <img src={LinkedIn} alt="" />
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
