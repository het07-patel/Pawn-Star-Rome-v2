"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import Hero from "@/components/hero";
import aboutHero from "@/assets/images/about-us/aboutHero.webp";

import firstImg from "@/assets/images/about-us/first-img.webp";
import secondImg from "@/assets/images/about-us/second-img.webp";
import thirdImg from "@/assets/images/about-us/third-img.webp";
import fourthImg from "@/assets/images/about-us/fourth-img.webp";

import VideoSection from "@/components/videoSection";
import OurValue from "@/components/ourValue";

const imageItems = [firstImg, secondImg, thirdImg, fourthImg];

export default function AboutUs() {
  const [height, setHeight] = useState(0);

  const antiqueObjRef = useRef(null);

  useEffect(() => {
    gsap.to(antiqueObjRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
    const element = document.getElementById("scroll-animated-box");
    const rect = element.getBoundingClientRect();
    setHeight(rect?.height);
  }, []);

  return (
    <div>
      <Hero
        imageSrc={aboutHero}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Trusted Pawn Shop in Rome"
        description="We are a trusted pawn shop in Rome, offering fair deals on gold, silver, electronics, tools, antiques, and more."
      />

      {/* Scroll Animated Section */}
      <section className="container my-10">
        <div className="relative" style={{ height: `${height}px` }}>
          <div className="min-h-[100vh] flex flex-col sticky top-0 items-center text-center z-30 before:content-[''] after:content-[''] before:w-[1px] after:w-[1px] before:flex-grow after:flex-grow before:ml-auto after:ml-auto before:mr-auto after:mr-auto before:bg-white after:bg-white">
            <div className="my-10 w-full lg:w-[60%] bg-black/40 lg:bg-transparent p-4 rounded-lg space-y-2">
              <h3 className="text-xl md:text-3xl text-primary font-gelasio mx-auto">
                PAWN STAR ROME
              </h3>
              <p>
                Welcome to our trusted pawn shop in Rome, where we offer fair,
                fast, and secure pawn services for gold, silver, coins,
                electronics, power tools, antiques, bullions, and broken
                jewelry. Whether you're looking to buy, sell, or exchange items,
                our experienced team provides professional appraisals and quick
                cash offers. We specialize in collateral loans, ensuring you get
                the best value for your valuables. With a commitment to
                transparency and customer satisfaction, we are your go-to pawn
                shop for all your buying and selling needs in Rome. Visit us
                today for reliable and efficient pawn services.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="relative" id="scroll-animated-box">
              {imageItems.map((item, index) => (
                <div
                  className={`flex ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } ${
                    index + 1 === imageItems?.length ? "" : "mb-10 2xl:mb-32"
                  }`}
                  key={index}
                >
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image
                      src={item}
                      className="relative z-10 w-full md:max-w-[400px] h-[450px] object-cover"
                      alt="Pawn Star Rome | Gold, Silver, Diamond"
                      title="Pawn Star Rome | Gold, Silver, Diamond"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* WE LIVE OUR VALUES */}
      <OurValue />
    </div>
  );
}
