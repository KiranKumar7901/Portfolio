import React from "react";
import "./Work.css";
import upwork from "../Images/upwork.png";
import fb from "../Images/fb.png";
import netflix from "../Images/netflix.png";
import spotify from "../Images/spotify.png";
import amazon from "../Images/amazon.png";
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
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span style={darkMode ? { color: "var(--blueCard)" } : {}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Iste, autem numquam magnam inventore reiciendis hic?
          <br />
          Animi voluptatum, excepturi, natus enim temporibus quasi sed impedit
          alias,
          <br /> eveniet quaerat optio nam recusandae.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Doloribus laboriosam minima deserunt totam odio quod porro aperiam
          debitis illum,
          <br />
          unde dolore sit dignissimos incidunt,
          <br />a consequuntur doloremque molestiae iste distinctio!
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
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fb} alt="" />
          </div>
          <div className="w-secCircle" style={darkMode? {border:'5px solid #b2b2b2',zIndex:'2'}:{}}>
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={netflix} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={spotify} alt="" />
          </div>
        </motion.div>
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
