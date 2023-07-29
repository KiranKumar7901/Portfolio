import React from 'react'
import './Intro.css'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import boy from '../Images/31.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import crown from '../Images/crown.png'
import award from '../Images/award.png'
import cmh from '../Images/cmh.png'
import { motion } from 'framer-motion'
import { Link } from "react-scroll";

import { themeContext } from '../../context'
import { useContext } from 'react'

const Intro = () => {

    const transition = {duration: 2,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="intro" id='Intro'>
          <div className="i-left">
              <div className="i-name">
                  <span style={{ color: darkMode ? 'var(--blueCard)' : '' }}>Hi! I am</span>
                  <span>Kiran Kumar</span>
                  <span style={{color:darkMode?'var(--blueCard)':''}}>I'm a Web Developer <br />with experience in UI/UX Design. <br/>My expertise lies within front-end web apps.</span>
              </div>
              <Link spy={true} to='Contact' smooth={true}>
              <button className="button i-button">Hire Me</button>
            </Link>
              <div className="i-icons" >
              <a href="https://www.linkedin.com/in/kiran-kumar-514793179" style={{ color: darkMode ? 'var(--blueCard)' : 'var(--black)' }}><LinkedIn /></a>
              <a href="https://github.com/KiranKumar7901" style={{ color: darkMode ? 'var(--blueCard)' : 'var(--black)' }}><GitHub/></a>
              <a href="https://instagram.com/_karanprajapati_01?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3d" style={{ color: darkMode ? 'var(--blueCard)' : 'var(--black)' }}><Instagram/></a>
              </div>
          </div>
          <div className="i-right" style={darkMode?{zIndex: 0}:{}}>
              <img src={boy} alt="" />
              <motion.img
                  initial={{ left: '-1rem' }}
                  whileInView={{ left: '2rem' }}
                  transition={transition}
                  src={cmh} alt="" />
              <motion.div
                  initial={{ top: '-5rem' }}
                  whileInView={{ top: '-1rem' }}
                  transition={transition}
                  className="floating-div"
                  style={{ top: '-4%', left: '31rem' }}>
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
              </motion.div>
              <motion.div
                  initial={{ top: '27rem' }}
                  whileInView={{ top: '22rem' }}
                  transition={transition}
                  className="floating-div"
                  style={{ top: '18rem', left: '2rem' }}>
                  <FloatingDiv image={award} txt1='Coding' txt2='Enthusiast'/>
              </motion.div>
              {/* blur div */}
              <div className="blur" style={darkMode ? {left: '12rem', top:'-3rem', background: 'rgba(252,166,31)'}:{ background: 'rgb(238,210,255' }}></div>
              <div className="blur" style={darkMode ? {background: 'none'}:{background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-25rem'}}></div>
          </div>
    </div>
  )
}

export default Intro
