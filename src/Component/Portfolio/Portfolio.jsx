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
        <div className="portfolio">
            {/* heading */}
            <span style={darkMode?{color: 'var(--blueCard)'}:{}}>Recent Projects</span>
            <span>Portfolio</span>
            {/* Slider */}
            <Swiper
                spaceBetween={40}
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
            </Swiper>
        </div>
  )
}

export default Portfolio