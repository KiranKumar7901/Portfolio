import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// import th1 from "../Images/th1.jpg";
import th1 from "../Images/th2.jpg";
import th2 from "../Images/th2.jpg";
import th3 from "../Images/th3.jpg";

import { themeContext } from '../../context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={darkMode?{color: 'var(--blueCard)'}:{}}>Recent Projects</span>
            <span>Portfolio</span>
            {/* Slider */}
            <Swiper
                spaceBetween={240}
                slidesPerView={1}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={th1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={th3} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="blur p-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur p-blur2" style={{background: '#fca71fab'}}></div>
        </div>
  )
}

export default Portfolio
