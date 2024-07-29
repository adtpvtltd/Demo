import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'; 

import Banner1 from './image/Banner1.jpg';
import Banner2 from './image/Banner2.jpg';

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3, 
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <img src={Banner1} alt='Banner-Image'/>
          <AnimatePresence mode="wait">
            {activeIndex === 0 && (
              <motion.div 
                key="content-1"
                className="banner-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h3 variants={itemVariants}>Moods Of The Earth</motion.h3> <br/>
                <motion.h1 variants={itemVariants}>TRENDING PRODUCTS</motion.h1>
                <motion.p variants={itemVariants}>An ode to the Earth's artistry, watch how these marvels come alive with diamonds, rubies, tanzanites, citrines, emeralds, rubellite, sapphires and coloured gemstones set in exceptional designs.</motion.p>
                <motion.button className="shop-now" variants={itemVariants}>SHOP NOW</motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt='Banner-Image'/>
          <AnimatePresence mode="wait">
            {activeIndex === 1 && (
              <motion.div 
                key="content-2"
                className="banner-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h3 variants={itemVariants}>Moods Of The Earth</motion.h3> <br/>
                <motion.h1 variants={itemVariants}>TRENDING PRODUCTS</motion.h1>
                <motion.p variants={itemVariants}>An ode to the Earth's artistry, watch how these marvels come alive with diamonds, rubies, tanzanites, citrines, emeralds, rubellite, sapphires and coloured gemstones set in exceptional designs.</motion.p>
                <motion.button className="shop-now" variants={itemVariants}>SHOP NOW</motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
