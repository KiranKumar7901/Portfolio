import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kiran</div>
        <Toggle />
      </div>
      <div className="blur n-blur1" style={{top:'-2rem',left:'-2rem',background:'var(--purple)'}}></div>
      <div className="blur n-blur2" style={{top:'5rem',left:'32rem',background:'var(--color)'}}></div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to='Intro' smooth={true}>
              <li className="li">Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
              <li className="li">Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
            <li className="li">Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
            <li className="li">Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true}>
            <li className="li">Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
