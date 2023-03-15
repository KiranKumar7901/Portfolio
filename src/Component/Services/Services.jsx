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
        <span style={{color:darkMode?'var(--blueCard)':''}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Iste, autem numquam magnam inventore reiciendis hic?
          <br />
          Animi voluptatum, excepturi, natus enim temporibus quasi sed impedit
          alias,
          <br /> eveniet quaerat optio nam recusandae.
        </span>
        <a href={dev} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF9" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ top: '-3rem' }}
          whileInView={{ top: '0rem' }}
          transition={transition}
          
          style={{ top: "-5rem", left: "26rem" }}>
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
          style={{ top: "12rem", left: "8rem" }}>
          <Card
            emoji={developer}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, C++, Java, ReactJs, MySQL"}
          />
        </motion.div>
        <motion.div
          initial={{ left: '45rem' }}
          whileInView={{ left: '43rem' }}
          transition={transition}
          style={{ top: "8rem", left: "43rem" }}>
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
