import React from 'react'
import './Card.css'
import { themeContext } from '../../context';
import { useContext } from 'react';

const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className="card" style={darkMode?{background:'rgba(250, 187, 187, 0.26)'}:{}}>
          <img src={emoji} alt="" />
          <span style={darkMode?{color:'white'}:{}}>{heading}</span>
          <span style={darkMode?{color:'var(--blueCard)'}:{}}>{detail}</span>
          <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card
