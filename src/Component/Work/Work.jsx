import React from "react";
import "./Work.css";
import fsd from "../Images/fsd.png";
import jd from "../Images/ui.png";
import msd from "../Images/msd.png";
import ml from "../Images/ml.png";
// import amazon from "../Images/amazon.png";
import { themeContext } from "../../context";
import { useContext } from "react";

import { motion } from "framer-motion";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id='Experience'>
      <div className="awesome w-left">
        <span style={darkMode ? { color: "var(--blueCard)" } : {}}>
          Works in All these
        </span>
        <span>Technologies!</span>
        <span style={darkMode ? { color: "var(--blueCard)" } : {}}>
          With a Diverse background that spans Web Development, and UI/UX Design,
          <br />
          I bring a unique perspective to every project.
          <br />
          I'm always eager to take on new challenges and explore innovative solutions.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF9" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{duration: 3.5,type: 'spring'}}
          className="w-mainCircle" style={darkMode ? { zIndex: '2' } : {}}>
          <div className="w-secCircle">
            <img src={fsd} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={jd} alt="" />
          </div>
          {/* <div className="w-secCircle" style={darkMode? {border:'5px solid #b2b2b2',zIndex:'2'}:{}}>
            <img src={amazon} alt="" />
          </div> */}
          <div className="w-secCircle">
            <img src={ml} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={msd} alt="" />
          </div>
        </motion.div>
        <div className="blur s-blur1" style={{ background: "var(--color)" }}></div>
        {/* background circles */}
        <div
          className="w-backCircle blueCircle"
          style={darkMode ? { zIndex:'1'} : {}}
        ></div>
        <div className="w-backCircle yellowCircle" style={darkMode ? { zIndex:'1'}:{}}></div>
      </div>
    </div>
  );
};

export default Work;
