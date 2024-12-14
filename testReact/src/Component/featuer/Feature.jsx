import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../featuer/Fearture.css'
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='img1'><img src="public/2.jpg" alt="" width="1200px" /></div></SwiperSlide>
        <SwiperSlide>     <div className='img3'><img src="public/banner-6.webp" alt="" width="900px" /></div></SwiperSlide>
        <SwiperSlide>        <div className='img2'><img src="public/banner-3.webp" alt="" width="900px" /></div></SwiperSlide>

      </Swiper>

      <div className='card-wrapper'>
                    <img src="public/banner-4.webp" alt="" />
                    <img src="public/banner-5.webp" alt="" />



                </div>

    </>
  );
}
