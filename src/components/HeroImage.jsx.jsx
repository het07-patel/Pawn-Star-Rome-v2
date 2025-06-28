import React from "react";
import CustomImage from "./customImage";


const HeroSection = ({
  title = "Pawn Star Rome",
  imgSrc,
  videoSrc,
  heading = "Your Legacy Deserves More Than Ordinary",
  subtext = "Discover jewelry that speaks to your story crafted with rare stones, timeless design details.",
}) => {
  return (
    <div className="relative flex w-full h-[500px] rounded-xl overflow-hidden">
      {/* Background media */}
      <div className="flex-1 relative">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <CustomImage
            src={imgSrc}
            alt="Coins Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Overlay text on left side */}
      <div className="absolute inset-0 flex items-center px-10 md:px-16 z-10">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-gelasio leading-tight drop-shadow-lg">{heading}</h2>
          <p className="mt-4 text-base md:text-lg text-basewhite drop-shadow">
            {subtext}
          </p>
        </div>
      </div>

      {/* Right vertical strip */}
      <div className="sm:w-[60px] lg:w-[70px] h-[300px] bg-black rounded-l-xl flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2">
        <p className="text-white text-lg font-medium tracking-wide [writing-mode:vertical-rl] [text-orientation:mixed]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
