"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import img1 from "@/assets/images/what-we-buy/bullion/box1.webp";
import img2 from "@/assets/images/what-we-buy/bullion/box2.webp";
import img3 from "@/assets/images/what-we-buy/bullion/box3.webp";
import img4 from "@/assets/images/what-we-buy/bullion/box4.webp";

const imageList = [
  { src: img1, title: "Gold Bars" },
  { src: img2, title: "Silver Rounds" },
  { src: img3, title: "Platinum Coins" },
  { src: img4, title: "American Gold Eagles" },
];

const ImageCarousel = () => {
  return (
    <div className="w-full py-10">
      <HeadingTitle
        sectionName="Explore the Most Traded Bullion Types"
        description="Bullion comes in many trusted forms, and we accept them all. Whether you're holding classic bars or government-minted coins, each piece is assessed with precision and care for maximum value."
      />

      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true}
        freeMode={{ enabled: true, momentum: false }}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={18}
        breakpoints={{
          320: { slidesPerView: 1.4, spaceBetween: 10 },
          480: { slidesPerView: 1.6, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
        }}
        className="px-4 sm:px-6 md:px-10 lg:px-20"
      >
        {imageList.concat(imageList).map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#0b0b0b] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mt-24">
              <div className="h-[400px] w-full overflow-hidden">
                <CustomImage
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="py-3 text-center text-sm font-semibold px-2">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
