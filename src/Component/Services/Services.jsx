import React from "react";
import "./Services.css";
import Heartemoji from "../Images/heartemoji.png";
import developer from "../Images/dd.png";
import dev from "../Images/dl.png";
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
          I have developed an app using Java (Student Report Card Handling System) <br />
          which takes the record of the student and generate the report card of the students.<br />
          I have developed my Personal Portfolio using React Js and some small projects <br />
          like Calculator, Clock using JavaScript <br />
          and also developed an E-commerce Site and clone of Flipkart. 
        </span>
        <a href={dev} download>
          <button className="button s-button">Download CV</button>
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
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
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
            detail={"HTML, CSS, JavaScript, C++, Java, ReactJs, MySQL"}
          />
        </motion.div>
        <motion.div
          initial={{ left: '28rem' }}
          whileInView={{ left: '26rem' }}
          transition={transition}
          style={{ top: "25rem", left: "26rem" }}>
          <Card
            emoji={dev}
            heading={"UI/UX"}
            detail={"Adobe XD, Figma, Adobe Illustrator"}
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
