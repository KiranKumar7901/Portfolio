import React from 'react'
import './Portfolio.css'
import th1 from "../Images/th1.jpg";
import th2 from "../Images/th2.jpg";
import th3 from "../Images/th3.jpg";
import th4 from "../Images/th4.jpg";
import th5 from "../Images/th5.jpg";

import { themeContext } from '../../context';
import { useContext } from 'react';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id='Portfolio' style={darkMode?{zIndex:0}:{}}>
            {/* heading */}
            <span style={darkMode?{color: 'var(--blueCard)'}:{}}>Recent Projects</span>
            <span>Portfolio</span>
            {/* Slider */}
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 1,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <a href="http://"><img src={th1} alt="" /></a>
                </SwiperSlide>                
                <SwiperSlide>
                    <a href="https://github.com/KiranKumar7901/Student-Report-Card-Handling-System"><img src={th2} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/KiranKumar7901/YouTubeClone"><img src={th5} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/KiranKumar7901/Heart-Disease-Prediction-Project"><img src={th3} alt="" /></a>
                </SwiperSlide>                
                <SwiperSlide>
                    <a href="https://github.com/KiranKumar7901/Text-to-Image-Generator"><img src={th4} alt="" /></a>
                </SwiperSlide>
            </Swiper>
            <div className="blur p-blur1" style={darkMode?{background: 'none'}:{background: 'var(--purple)'}}></div>
            <div className="blur p-blur2" style={darkMode?{background: 'none'}:{background: '#fca71fab'}}></div>
        </div>
  )
}

export default Portfolio
