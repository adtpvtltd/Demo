import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Banner1.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

//  import the banner image
import Banner from './assets/Banner.avif';
import Banner2 from './assets/Banner2.avif';

export default function Banner1() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img src={Banner} alt='Banner'/></SwiperSlide>
      <SwiperSlide><img src={Banner2} alt='Banner2'/></SwiperSlide>
      <SwiperSlide><img src={Banner} alt='Banner'/></SwiperSlide>
    </Swiper>
  );
}
