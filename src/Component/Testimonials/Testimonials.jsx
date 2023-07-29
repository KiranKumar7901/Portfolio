import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import unstop from "../Images/unstop.png";
import gfg from "../Images/gfg.png";
import { themeContext } from "../../context";
import { useContext } from "react";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      Title: <img src={unstop} alt="Unstop"/>,
      review:
        "I got participation certificate of Namma Yatri from unstop.",
    },
    {
      Title: <img src={gfg} alt="GeeksforGeeks"/>,
      review:
        "Through my dedication and hardwork, I have solved challenging coding problems on popular platforms like GeeksforGeeks and LeetCode.",
    },
    
  ];
  return (
    <div className="t-wrapper" id="Testimonials" style={darkMode?{zIndex:0}:{}}>
      <div className="t-heading">
        <span>Achievements </span>
        <span>till </span>
        <span>now..</span>
        </div>
        <div
          className="blur t-blur1"
          style={darkMode ? { background: 'none' }:{ background: "var(--purple" }}
          ></div>
        <div className="blur t-blur2" style={darkMode ? { background: 'none' }:{ background: "skyblue" }}></div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials" style={darkMode?{background: 'rgba(255, 200, 150, 0.2)',border:'7px solid rgb(255, 200, 150)'}:{}}>
                <span style={darkMode?{color: 'var(--orange)'}:{}}>{clients.Title}</span>
                <span style={darkMode?{color: 'var(--blueCard)'}:{}}>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
