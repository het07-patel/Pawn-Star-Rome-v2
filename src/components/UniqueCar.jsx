"use client";
import CustomImage from "@/components/customImage";
import estate3 from "@/assets/images/what-we-buy/cars/hero-play.webp";
import estate4 from "@/assets/images/what-we-buy/cars/Img2.webp";

export default function UniqueCar() {
  return (
    <>
      <div className="border-t border-primary mt-10"></div>
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-32">
        <div className="4xl:translate-y-[15%]">
          <p className="font-belleza text-3xl md:text-6xl lg:text-8xl xl:text-8xl 4xl:text-[180px] text-[#f4e9e9d6] uppercase lg:tracking-wider">
            Unique Cars
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="relative md:bottom-[-1%] lg:bottom-0 4xl:bottom-[-10%] flex">
            <CustomImage
              srcAttr={estate3}
              titleAttr=""
              altAttr=""
              className="w-full h-[280px] sm:h-[360px] md:h-[610px] lg:h-[750px] 2xl:h-[850px] 4xl:h-[550px] object-cover"
            />
          </div>
          <div>
            <div>
              <CustomImage
                srcAttr={estate4}
                titleAttr=""
                altAttr=""
                className="w-full "
              />
            </div>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[28px] leading-relaxed pt-6">
              Classic cars, limited editions, and custom builds deserve more than standard appraisals. We recognize the craftsmanship, rarity, and character behind each unique vehicle.

            </p>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[28px] leading-relaxed pt-6">
          Whether it’s a vintage collectible or a performance-modified car, we offer thoughtful evaluations and fair pricing that reflect its full story and value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
