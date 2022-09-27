import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ProjectSwiper({src, alt, className}) {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={className}
      >
        <SwiperSlide>
          <img src={src} alt={alt} />
        </SwiperSlide>
        <SwiperSlide >
          <h3>Reconnect App</h3>
          <p>Final Project</p>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
