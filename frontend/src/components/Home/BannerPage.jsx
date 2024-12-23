import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerPage.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

// Images Import
import Book1 from "../../assets/banner-books/Book1.jpg";
import Book2 from "../../assets/banner-books/Book2.jpg";
import Book3 from "../../assets/banner-books/Book3.jpg";
import Book4 from "../../assets/banner-books/Book4.jpg";
import Book5 from "../../assets/banner-books/Book5.jpg";

const BannerPage = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="images">
          <img src={Book1} />
        </SwiperSlide>
        <SwiperSlide className="images">
          <img src={Book2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default BannerPage;
