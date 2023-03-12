import React from "react";
import "./Work.css";
import upwork from "../Images/upwork.png";
import fb from "../Images/fb.png";
import netflix from "../Images/netflix.png";
import spotify from "../Images/spotify.png";
import amazon from "../Images/amazon.png";

const Work = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
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
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fb} alt="" />
          </div>
          <div className="w-secCircle">
           <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={netflix} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={spotify} alt="" />
          </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
