"use client";
import Hero from "@/components/hero";
import Substract from "@/assets/images/home-page/Subtract.webp";
import { LinkButton } from "@/components/button";
import Image from "next/image";
import buttonArrow from "@/assets/images/home-page/buttonArrow.svg";
import homePageStarIcon from "@/assets/images/home-page/homePageStarIcon.webp";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import HomePageAccordian from "@/components/HomePageAccordian";

export default function Home() {
  return (
    <div>
      <div>
        <Hero
          imageSrc2={Substract}
          imageSrc2AltAtrr={"Pawn Star Rome | Gold, Silver, Diamond"}
          imageSrc2TitleAtrr={"Pawn Star Rome | Gold, Silver, Diamond"}
          videoSrc={"videos/shop.mp4"}
          isHomePage={true}
        />
      </div>

      <div className="relative w-full inset-0 flex justify-center items-center">
        {/* Vertical Line */}
        <div className="absolute w-px h-full bg-[#222222]"></div>

        <section className="relative bg-gray-100 py-8 ">
          <div className="absolute w-full inset-0 flex justify-center items-center">
            {/* Horizontal Line */}
            <div className="absolute w-full h-px bg-[#222222]"></div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 xl:mt-10 mx-auto xl:px-4 lg:px-8 xl:py-20">
            <div className="w-[100%] md:w-[100%] xl:w-[45%]   rounded:xl xl:hidden  h-full m-auto z-20">
              <video
                muted
                preload="auto"
                aria-label="Video player"
                playsInline
                className="w-full h-full object-cover"
                autoPlay
                loop
              >
                <source src={"videos/homePageHeroVed2.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-[60%] md:w-[50%] xl:w-[45%]  sm:px-6  xl:h-[60vh] hidden xl:block h-full m-auto">
              <video
                muted
                preload="auto"
                aria-label="Video player"
                playsInline
                className="w-full h-full object-cover"
                autoPlay
                loop
                style={{
                  borderRadius: "39px",
                  rotate: "-10.34deg",
                }}
              >
                <source src={"videos/homePageHeroVed2.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="m-auto lg:w-[90%] sm:px-6">
              <h1 className="text-2xl md:5xl xl:text-5xl font-gelasio font-bold lg:!leading-[3.5rem]">
                Comprehensive Pawn Services in Rome
              </h1>
              <p className="xl:pt-12 pt-4 text-l pb-4 w-[90%]">
                Discover reliable pawn services in Rome for gold, silver, coins,
                electronics, antiques, and more. We offer quick loans, buy and
                sell options, and item exchanges with honest valuations and
                professional expertise you can trust.
              </p>
              <div className="flex  mt-2">
                <LinkButton
                  href="what-we-buy"
                  className="w-fit before:bg-primary animated-btn border border-primary hover:border-white inline-block relative my-2 !bg-approxblack lg:mt-6 !py-2 text-approxblack font-semibold  text-sm md:text-lg rounded-lg overflow-hidden group"
                  style={{ borderRadius: "50px" }}
                >
                  <span className="relative z-10 transition-colors duration-400 group-hover:text-white pr-2">
                    Learn How it Works
                  </span>
                  <div className="relative z-20 group-hover:filter group-hover:invert">
                    <Image
                      src={buttonArrow}
                      alt="Pawn Star Rome | Gold, Silver, Diamond"
                      title="Pawn Star Rome | Gold, Silver, Diamond"
                      priority
                      className="object-cover z-20 group-hover:fill-white"
                    />
                  </div>
                </LinkButton>
              </div>
            </div>
            <div className="absolute inset-2  sm:px-6  flex justify-center items-center p-4 translate-x-[42%] translate-y-[-12%]">
              <Image
                src={homePageStarIcon}
                alt="Pawn Star Rome | Gold, Silver, Diamond"
                title="Pawn Star Rome | Gold, Silver, Diamond"
                priority
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#060406] ">
        <div className="relative inset-0 flex justify-center items-center">
          <div className="absolute w-px h-full bg-[#222222]"></div>
          <HomePageAccordian />
        </div>
      </section>

      <section className="relative h-screen w-full">
        {/* Content Overlay */}
        <div className="absolute inset-0 z-[1] flex items-center text-center justify-center p-4">
          <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[55%] p-4 sm:p-6 md:p-8 xl:p-10 3xl:p-16 border border-white rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/50 ">
            <h4 className="font-gelasio text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[50px] font-bold !leading-tight">
              Turn Your Valuables into Cash with Ease and Trust
            </h4>
            <p className="mt-4 sm:mt-6 md:mt-8 2xl:mt-10 text-sm sm:text-base md:text-lg leading-relaxed">
              Our Rome-based pawn shop offers fast, secure services to help you
              turn your valuables into cash. Whether its gold, silver, jewelry,
              electronics, antiques, or power tools, we provide fair appraisals
              and reliable transactions. Trust us for quick loans, sales, and
              exchanges with honest, professional service every step of the way.
            </p>
          </div>
        </div>

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            muted
            preload="auto"
            aria-label="Video player"
            playsInline
            className="w-full h-full object-cover"
            autoPlay
            loop
          >
            <source src="videos/homePageHeroVed1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

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
          <Image
            src={homePageStarIconFull}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            priority
            className=" w-[90%] h-[90%] object-contain"
          />
        </div>
        <div className="absolute inset-2 flex justify-center items-center p-4 scale-x-[-1]  w-[70%] md:w-[100%] md:translate-x-[-43%] md:translate-y-[12%] translate-x-[-25%] translate-y-[20%] ">
          <Image
            src={homePageStarIconFull}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            priority
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      </section>
    </div>
  );
}
