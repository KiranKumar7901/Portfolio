import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../context";
import { useContext } from "react";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      Name: "Kiran",
      review:
        "Participated in the Namma Yatri",
    },
    {
      Name: "Karan",
      review:
        "Through my dedication and hardwork, I have solved over 200 challenging coding problems on popular platform GeeksforGeeks.",
    },
    
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Achievements </span>
        <span>till </span>
        <span>now...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
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
                <span style={darkMode?{color: 'var(--orange)'}:{}}>{clients.Name}</span>
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
