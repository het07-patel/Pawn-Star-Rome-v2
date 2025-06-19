import React, { useEffect, useRef, useState } from "react";
import thumbnail from "@/assets/images/about-us/thumbnail.webp";
import antiquePottery from "@/assets/images/about-us/antique-pottery.webp";
const aboutVideo = "/videos/about.mp4";
import playButton from "@/assets/images/icons/play.svg";
import pauseButton from "@/assets/images/icons/pause.svg";
import Image from "next/image";
export default function VideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className={`container px-2 2xl:px-24 pt-8 pb-3 md:mb-10 2xl:py-14 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          muted
          preload="none"
          aria-label="Video player"
          className="h-full w-full object-contain rounded-lg overflow-hidden"
          playsInline
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div
            className="absolute cursor-pointer inset-0 flex items-center justify-center"
            onClick={handleThumbnailClick}
          >
            <Image
              src={thumbnail}
              alt="Pawn Star Rome | Gold, Silver, Diamond"
              title="Pawn Star Rome | Gold, Silver, Diamond"
              className="absolute inset-0 h-full w-full object-cover rounded-lg overflow-hidden"
            />
            <div className="flex items-center justify-center z-40">
              <Image
                src={playButton}
                className="w-8 md:w-12 2xl:w-auto"
                alt="Pawn Star Rome | Gold, Silver, Diamond"
                title="Pawn Star Rome | Gold, Silver, Diamond"
              />
            </div>
          </div>
        )}

        {isPlaying && (
          <div
            className={`absolute inset-0 flex items-center justify-center cursor-pointer z-40 ${
              isHovered ? "block" : "hidden"
            }`}
            onClick={togglePlayPause}
          >
            <Image
              src={pauseButton}
              className="w-8 md:w-12 2xl:w-auto"
              alt="pause"
            />
          </div>
        )}

        <Image
          src={antiquePottery}
          className={`absolute top-full left-12 md:left-10 -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 lg:w-52 2xl:w-60 transition-all duration-1000 animate-floating ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          alt="Pawn Star Rome | Antique"
          title="Pawn Star Rome | Antique"
        />
      </div>
      <h3
        className={`font-gelasio lg:text-2xl tracking-wide mt-5 ml-20 md:ml-32 lg:ml-44 w-[290px] lg:w-[423px] transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        "Our selection of gold, silver, and antiques showcases timeless
        craftsmanship and the rich stories behind each piece."
      </h3>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
