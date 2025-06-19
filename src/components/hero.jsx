"use client";
import Image from "next/image";
import { LinkButton } from "./button";
import flowerSvg from "@/assets/images/home-page/flower.svg";
import buttonArrow from "@/assets/images/home-page/buttonArrow.svg";
import navigationArrow from "@/assets/images/home-page/navigationArrow.svg";

const Hero = ({
  title,
  imageSrc,
  imageSrc2,
  imageSrcAltAttr = "",
  imageSrcTitleAttr = "",
  imageSrc2AltAtrr = "",
  imageSrc2TitleAtrr = "",
  videoSrc,
  description,
  isHomePage = false,
}) => {
  return (
    <section
      className={`relative overflow-hidden ${
        isHomePage ? "h-[110vh]" : "h-[70vh] md:h-[80vh] lg:h-[80vh]"
      }`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageSrcAltAttr}
          title={imageSrcTitleAttr}
          width={2070}
          height={1380}
          priority
          className="h-full w-full object-cover"
        />
      ) : (
        <video
          width={2070}
          height={1380}
          muted
          preload="auto" // Ensure video is preloaded fully
          aria-label="Video player"
          playsInline
          className="h-full w-full object-cover"
          autoPlay
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay for black lines */}
      {/* {imageSrc2 && (
        <div className="absolute inset-0 z-10">
          <Image
            src={imageSrc2}
            alt={imageSrc2AltAtrr}
            title={imageSrc2TitleAtrr}
            width={2070}
            height={1380}
            priority
            className="h-full w-full object-cover opacity-40"
          />
        </div>
      )} */}
      {isHomePage ? (
        <>
          <div className="flex justify-center p-4 absolute inset-0 items-center z-30">
            <div
              className={`flex flex-col justify-center items-center w-full  text-center gap-3 xxs:gap-1.5 sm:gap-2 ${
                isHomePage ? "" : "mt-20 md:mt-10"
              }`}
            >
              <div className="lg:translate-x-[12%] xl:pt-[11%]">
                <div className="flex gap-4 lg:translate-x-[-15%] md:mb-8">
                  {/* First line */}
                  <div>
                    <h2 className="text-xl 2xl:leading-[60px] 4xl:9xl font-bold font-gelasio lg:leading-[50px] md:text-5xl tracking-wide uppercase xl:text-7xl">
                      YOUR TRUSTED PAWN{" "}
                    </h2>
                  </div>
                  <div className="w-[10px] 2xl:w-[60px] hidden md:w-[50px] xl:block">
                    <Image
                      src={flowerSvg}
                      alt="Pawn Star Rome | Gold, Silver, Diamond"
                      title="Pawn Star Rome | Gold, Silver, Diamond"
                      priority
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-4 lg:justify-start md:mb-8 md:mt-4">
                  {/* Second line */}
                  <div>
                    <h2 className="text-center text-xl 2xl:leading-[60px] 4xl:9xl font-bold font-gelasio lg:leading-[50px] md:text-5xl tracking-wide uppercase xl:text-7xl">
                      SHOP FOR GOLD
                    </h2>
                  </div>
                  <div className="rounded-xl w-[180px] hidden md:w-[180px] overflow-hidden translate-y-[-20%] xl:block xl:h-20 xl:w-[240px]">
                    <video
                      muted
                      preload="auto"
                      aria-label="Video player"
                      playsInline
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      style={{ borderRadius: "53px" }}
                    >
                      <source
                        src={"videos/homePageHeroVed2.mp4"}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="flex justify-center gap-4 lg:justify-start md:mb-8 md:mt-4 md:translate-x-[-4%]">
                  <div className="rounded-l hidden md:w-[180px] overflow-hidden translate-y-[-20%] xl:block xl:h-20 xl:w-[140px]">
                    <video
                      muted
                      preload="auto"
                      aria-label="Video player"
                      playsInline
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      style={{
                        borderRadius: "53px 53px  0px 60px",
                      }}
                    >
                      <source
                        src={"videos/homePageHeroVed4.mp4"}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Second line */}
                  <div>
                    <h2 className="text-xl 2xl:leading-[60px] 4xl:9xl font-bold font-gelasio lg:leading-[50px] md:text-5xl uppercase xl:text-7xl">
                      SILVER & MORE
                    </h2>
                  </div>
                </div>
                <div className="hidden lg:block md:translate-x-[10%]">
                  <Image
                    src={navigationArrow}
                    alt="Pawn Star Rome | Gold, Silver, Diamond"
                    title="Pawn Star Rome | Gold, Silver, Diamond"
                    priority
                    className="h-full w-[20%] object-cover"
                  />
                </div>
                <div className="justify-center gap-2 items-center lg:translate-x-[32%] lg:translate-y-[-73%] translate-x-[25%]">
                  <div className="flex mt-2">
                    <LinkButton
                      href="contact"
                      className="border border-primary rounded-lg text-approxblack text-sm w-fit !bg-approxblack !py-2 animated-btn before:bg-primary font-semibold group hover:border-white inline-block lg:mt-6 md:text-lg my-2 overflow-hidden relative"
                      style={{ borderRadius: "50px" }}
                    >
                      <span className="duration-400 group-hover:text-white pr-2 relative transition-colors z-10">
                        Discover More
                      </span>
                      <div className="group-hover:filter group-hover:invert relative z-20">
                        <Image
                          src={buttonArrow}
                          alt="Pawn Star Rome | Gold, Silver, Diamond"
                          title="Pawn Star Rome | Gold, Silver, Diamond"
                          priority
                          className="group-hover:fill-white object-cover z-20"
                        />
                      </div>
                    </LinkButton>
                  </div>
                </div>
              </div>

              {description && (
                <h2 className="text-[14px] 2xl:text-[20px] md:text-[17px]">
                  {description}
                </h2>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center p-4 absolute inset-0 items-center">
            <div
              className={`flex flex-col justify-center items-center w-full max-w-[90%] xxs:max-w-full sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%] text-center gap-3 xxs:gap-1.5 sm:gap-2 ${
                isHomePage ? "" : "mt-8 md:mt-10"
              }`}
            >
              {!isHomePage}
              <h1 className="text-xl 2xl:leading-[60px] 2xl:text-5xl font-bold font-gelasio lg:leading-[50px] md:mb-2 md:text-4xl">
                {title}
              </h1>
              {description && (
                <h2 className="text-[14px] 2xl:text-[20px] md:text-[17px]">
                  {description}
                </h2>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
