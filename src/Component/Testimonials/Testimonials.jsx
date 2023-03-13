import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonials = () => {
  const clients = [
    {
      Name: "Kiran",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum dolorem! Dicta iure, amet quos et commodi distinctio, asperiores odit impedit excepturi, quae magnam libero tenetur facere ducimus obcaecati optio!",
    },
    {
      Name: "Karan",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum dolorem! Dicta iure, amet quos et commodi distinctio, asperiores odit impedit excepturi, quae magnam libero tenetur facere ducimus obcaecati optio!",
    },
    {
      Name: "Krish",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum dolorem! Dicta iure, amet quos et commodi distinctio, asperiores odit impedit excepturi, quae magnam libero tenetur facere ducimus obcaecati optio!",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
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
              <div className="testimonials">
                <span>{clients.Name}</span>
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
