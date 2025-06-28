import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/cars/hero-cars.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import { LinkButton } from "@/components/button";
import CarContain from "@/components/CarContain";
import CarAbout from "@/components/CarAbout";
import CarSection from "@/components/CarSection";
import UniqueCar from "@/components/UniqueCar";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";

export default function Watches() {
  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Where Cars Meet Real Value"
        description="Whether you're selling your used car or exploring trade-in options, we make the process smooth, transparent, and rewarding. Get expert insights, fair offers, and service you can rely on."
      />
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Driven by Trust, Backed by Value"
          description="From sedans and SUVs to trucks and coupes, we evaluate all types of used cars with precision and care. Our goal is to offer you fair value, clear guidance, and a smooth, no-pressure experience every time."
        />
      </section>

      <CarAbout />
      <CarSection />
    <UniqueCar />

      <div className="border-t border-primary mt-20"></div>

      <CarContain />

      <section className="relative  py-8 ">
        <div className="grid grid-cols-1 text-center py-20 w-[100%]">
          <h2 className=" text-2xl md:text-4xl font-gelasio font-bold !leading-[2.5rem] py-2">
            Pawn Star Rome For You
          </h2>
          <p className="md:!leading-[3.5rem]">
            Your trusted pawn shop in Rome for gold, silver, electronics,
            jewelry, and quick cash.
          </p>
          <div className="flex justify-center mt-2">
            <LinkButton
              href="what-we-buy"
              className="w-fit animated-btn relative inline-block border border-white hover:border-primary py-2 !bg-primary text-white font-semibold text-lg rounded-lg overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-400 group-hover:text-approxblack md:px-16 md:py-4 px-8 py-3 ">
                View More
              </span>
            </LinkButton>
          </div>
        </div>

        <div className="absolute inset-2 flex justify-center items-center p-4 w-[70%] md:w-[100%] md:translate-x-[42%] md:translate-y-[-10%] translate-x-[54%] translate-y-[-20%] ">
          <CustomImage
            src={homePageStarIconFull}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            priority
            className=" w-[90%] h-[90%] object-contain"
          />
        </div>
        <div className="absolute inset-2 flex justify-center items-center p-4 scale-x-[-1]  w-[70%] md:w-[100%] md:translate-x-[-43%] md:translate-y-[12%] translate-x-[-25%] translate-y-[20%] ">
          <CustomImage
            src={homePageStarIconFull}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            priority
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      </section>
    </>
  );
}
