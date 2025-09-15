"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import strengthsData from "./galleryCorouselData";

import "./GalleryCarousel.scss";

export default function GalleryCarousel() {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="stacked-carousel">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={true}
        slidesPerView={3} // show 5 cards
        //spaceBetween={-50}
        coverflowEffect={{
          rotate: 0, // keep cards straight
          stretch: 110,
          depth: 100,
          modifier: 1,
          // slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="stacked-swiper"
      >
        {strengthsData.map((card) => (
          <SwiperSlide key={card.id} className="stacked-card">
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: 5,
              }}
              draggable={false}
              src={card.cover}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <div className="btn-container">
        <button onClick={handlePrev} className="nav-btn left-btn">
          ◀
        </button>
        <button onClick={handleNext} className="nav-btn right-btn">
          ▶
        </button>
      </div>
    </div>
  );
}
