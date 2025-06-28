"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { LinkButton } from "./button";
import CustomImage from "./customImage";

export default function DiamondJewelrySwipper({ images }) {
  return (
    <div className="!rounded-none mx-auto py-4 text-center">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          940: {
            slidesPerView: 2,
          },
          1140: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="gap-2 flex justify-center">
            <div className="shadow-lg max-w-full mx-auto overflow-hidden text-center">
              <div className="relative flex justify-center rounded-xl overflow-hidden group">
                <CustomImage
                  srcAttr={src.image}
                  altAttr={src.altAttr}
                  titleAttr={src.titleAttr}
                  className="object-cover h-[500px] w-full max-w-[500px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-6 pb-4 text-white font-belleza">
                <p className="text-2xl mb-2">{src.title}</p>
                <div className="border-t-2 border-white w-[40px] mx-auto mb-4"></div>
                <div className="flex justify-center">
                  <LinkButton
                    href={src.link}
                    className="w-fit before:bg-primary animated-btn border border-primary hover:border-white inline-block relative my-2 !bg-approxblack lg:mt-6 !py-2 text-approxblack font-semibold text-sm md:text-lg rounded-lg overflow-hidden group"
                  >
                    <span className="relative z-10 transition-colors duration-400 group-hover:text-white">
                      Enquire Now
                    </span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
