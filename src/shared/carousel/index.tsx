import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Dashboard } from "../../pages";


export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Dashboard />
      </SwiperSlide>
    </Swiper>
  );
};
