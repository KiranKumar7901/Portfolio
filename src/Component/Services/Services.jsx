import React from "react";
import "./Services.css";
import Heartemoji from "../Images/heartemoji.png";
import developer from "../Images/dd.png";
import dev from "../Images/ds.png";
import resume from "../Images/Resume..pdf";
import Card from "../Card/Card";

import { themeContext } from "../../context";
import { useContext } from "react";

import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 2, type: 'spring'}

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? '#DDF8FE' : '' }}>My Awesome</span>
        <span>Services</span>
        <span style={{ color: darkMode ? 'var(--blueCard)' : '' }}>
          I offer a versatile and dynamic approach to problem-solving that allows me to tackle challenges <br />
          with confidence and creativity.<br />
          Whether it's building websites, creating creative interfaces or optimizing user experiences.<br />
          I'm committed to deliver high quality work and driving success for clients.
        </span>
        <a href={resume} className='s-button' download>
          <button className="button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF9" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ top: '2rem' }}
          whileInView={{ top: '4rem' }}
          transition={transition}
          
          style={{ top: "2rem", left: "25rem" }}>
          <Card
            emoji={Heartemoji}
            heading={"UI/UX Design"}
            detail={"Figma, Adobe Photoshop, Canva, Adobe Illustrator, Adobe XD"}
          />
        </motion.div>
        <motion.div
          initial={{ left: '6rem' }}
          whileInView={{ left: '8rem' }}
          transition={transition}
          style={{ top: "18rem", left: "8rem" }}>
          <Card
            emoji={developer}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, ReactJs, Bootstrap"}
          />
        </motion.div>
        <motion.div
          initial={{ left: '28rem' }}
          whileInView={{ left: '26rem' }}
          transition={transition}
          style={{ top: "25rem", left: "26rem" }}>
          <Card
            emoji={dev}
            heading={"Coder"}
            detail={"Languages: C, C++, Java, Python, PHP, MYSQL"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "#C1F5FF" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
