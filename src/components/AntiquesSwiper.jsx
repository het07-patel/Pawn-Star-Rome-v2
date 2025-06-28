"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CustomImage from "./customImage";

export default function AntiquesSwiper({ items = [] }) {
  return (
    <div className="py-10 px-4 text-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`p-4 rounded-xl text-basewhite ${
                index % 2 !== 0 ? "pt-10" : "pt-4"
              }`}
            >
              <CustomImage
                src={item.imgSrc}
                alt={item.alt || "Pawn Star Rome"}
                className="w-full h-[280px] sm:h-[280px] md:h-[360px] lg:h-[400px] object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
