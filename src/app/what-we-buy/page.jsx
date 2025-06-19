"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Hero from "@/components/hero";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "@/assets/images/icons/arrow.svg";
import line from "@/assets/images/what-we-buy/line.webp";
import weBuy from "@/assets/images/what-we-buy/weBuy.webp";
import image1 from "@/assets/images/what-we-buy/image-1.webp";
import image2 from "@/assets/images/what-we-buy/image-2.webp";
import image3 from "@/assets/images/what-we-buy/image-3.webp";
import image4 from "@/assets/images/what-we-buy/image-4.webp";
import image5 from "@/assets/images/what-we-buy/image-5.webp";
import image6 from "@/assets/images/what-we-buy/image-6.webp";
import image7 from "@/assets/images/what-we-buy/image-7.webp";
import image8 from "@/assets/images/what-we-buy/image-8.webp";
import image9 from "@/assets/images/what-we-buy/image-9.webp";
import image10 from "@/assets/images/what-we-buy/image-10.webp";
import pocket1 from "@/assets/images/what-we-buy/pocket-1.webp";
import pocket2 from "@/assets/images/what-we-buy/pocket-2.webp";
import pocket3 from "@/assets/images/what-we-buy/pocket-3.webp";
import yourPocket from "@/assets/images/what-we-buy/your-pocket.webp";
import whatWeBuyHero from "@/assets/images/what-we-buy/whatWeBuyHero.webp";
import { useWindowSize } from "@/utils/hooks";

export default function WhatWeBuy() {
  const size = useWindowSize();
  const imageRefs = useRef([]);
  const accordionRefs = useRef([]);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   imageRefs.current.forEach((imageBox, index) => {
  //     ScrollTrigger.create({
  //       trigger: imageBox,
  //       start: "top center",
  //       end: "bottom center",
  //       onEnter: () => setOpenIndex(index),
  //       onEnterBack: () => setOpenIndex(index),
  //       onLeave: () => {
  //         if (openIndex === index) {
  //           setOpenIndex(null);
  //         }
  //       },
  //     });
  //   });

  //   accordionRefs.current.forEach((accordionItem, index) => {
  //     gsap.to(accordionItem, {
  //       scrollTrigger: {
  //         trigger: accordionItem,
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play reverse play reverse",
  //       },
  //       duration: 0.5,
  //       opacity: 1,
  //       y: 0,
  //       ease: "power2.inOut",
  //     });
  //   });

  //   return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  // });

  const scrollToImage = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(size.width < 768); // Adjust this threshold as needed
    };

    handleResize(); // Call once on mount to set initial state

    size?.width?.addEventListener("resize", handleResize);
    return () => {
      size?.width?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    imageRefs.current.forEach((imageBox, index) => {
      ScrollTrigger.create({
        trigger: imageBox,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenIndex(index),
        onEnterBack: () => setOpenIndex(index),
      });
    });

    accordionRefs.current.forEach((accordionItem, index) => {
      gsap.to(accordionItem, {
        scrollTrigger: {
          trigger: accordionItem,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  const handleClick = useCallback(
    (index) => {
      if (openIndex === index && size?.width > 1024) {
        return;
      }
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      scrollToImage(index);
    },
    [openIndex, size]
  );

  return (
    <div>
      <Hero
        imageSrc={whatWeBuyHero}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Gold, Silver, Electronics & More"
        description="Looking to sell or pawn your items? We buy gold, silver, coins, electronics, power tools, antiques, bullions, and more. Get quick cash with reliable, professional service at our Rome pawn shop."
      />
      <section className="relative z-[2] my-20">
        <div className="relative h-[160px] xs:h-[300px] sm:h-[350px] md:h-[280px] lg:h-[450px] 3xl:h-[650px] flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={line}
              alt="Pawn Star Rome | Gold, Silver, Diamond"
              title="Pawn Star Rome | Gold, Silver, Diamond"
              className="z-[-1] h-auto w-full object-cover"
            />
          </div>
          <Image
            src={weBuy}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            className="object-contain z-[1] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] 3xl:w-auto"
          />
        </div>
      </section>

      <section className="px-4 mx-auto text-center max-w-[95%] md:max-w-[85%] xl:max-w-[80%]">
        <h2 className="text-2xl font-semibold uppercase font-gelasio leading-tight xxs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl  3xl:text-5xl">
          We buy your valuables for the <br />
          <span className="text-primary">highest appraised value!</span>
        </h2>
        <p className="mt-6 text-sm xxs:text-base sm:text-lg lg:text-xl">
          At our{" "}
          <span className="text-primary"> trusted pawn shop in Rome </span>, we
          buy a wide range of items including gold, silver, coins, electronics,
          power tools, antiques, bullions, and broken jewelry. Whether you're
          looking to sell your unwanted items or pawn them for a loan, we offer
          quick cash, fair prices, and reliable service. We specialize in buying
          and pawning valuables like electronics, jewelry, power tools, and
          more, providing you with fast, secure transactions. Our professional
          team ensures fair evaluations, giving you the best deals for your
          gold, silver, coins, and other valuables. Visit us today for all your
          selling and pawning needs.
        </p>
      </section>

      <section>
        <Accordion
          imageRefs={imageRefs}
          accordionRefs={accordionRefs}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          handleClick={handleClick}
        />
      </section>

      <motion.section
        ref={sectionRef}
        className="relative text-center rounded-xl 2xl:rounded-[30px] p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container relative z-[1]">
          <motion.h3
            className="my-6 mb-2 md:mb-14 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase font-gelasio"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            extra cash in <span className="text-primary">your pocket</span>
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-1 md:gap-2 my-7 lg:my-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {valuesSection.map((valueCard, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <Image
                  src={valueCard.img}
                  alt={valueCard.altAttr}
                  title={valueCard.titleAttr}
                />
                <p className="text-[12px] md:text-sm lg:text-base lg:w-[70%] ">
                  {valueCard.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Gradient */}
        <div className="absolute left-0 top-0 h-full w-full z-0">
          <Image
            src={yourPocket}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.section>
    </div>
  );
}

const Accordion = ({
  imageRefs,
  accordionRefs,
  openIndex,
  setOpenIndex,
  handleClick,
}) => {
  return (
    <>
      <div className="max-w-screen-4xl mx-auto flex px-4 py-8 gap-2 relative accordion">
        <div className="rounded-lg shadow-lg lg:w-[45%]  sticky top-0 h-fit ">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              images={item.images}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              itemRef={(el) => (accordionRefs.current[index] = el)}
            />
          ))}
        </div>

        <div className="w-full lg:w-[55%] my-2  hidden lg:block">
          {accordionData?.map((y, j) => (
            <div
              key={j}
              className={`imagebox-${j}`}
              ref={(el) => (imageRefs.current[j] = el)}
            >
              {y.images?.map((x, i) => (
                <Image
                  key={`image-${j}-${i}`}
                  src={x?.image}
                  alt=""
                  title=""
                  className="object-contain w-full h-full"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AccordionItem = ({
  title,
  content,
  images,
  isOpen,
  onClick,
  itemRef,
}) => {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const gradientRef = useRef(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(arrowRef.current, {
      rotation: isOpen ? 1 : 180,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(gradientRef.current, {
      opacity: isOpen ? 1 : 180,
      duration: 0.5,
      ease: "power0.in",
    });
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      className={`border border-l-0 my-2 border-darkgray relative overflow-hidden ${
        isOpen ? "border-t-0" : ""
      }`}
    >
      <div
        ref={gradientRef}
        className="absolute top-0 left-0 w-full h-full opacity-0"
        style={{
          background:
            "linear-gradient(140deg, #3A2B02 3%, #3A2B0270 15%, #3A2B0205 40%, #171717 70%, #171717 100%)",
          pointerEvents: "none",
        }}
      />
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-3 px-4 3xl:py-4 3xl:px-6 text-left hover:bg-gray-50 transition-colors duration-200 relative z-10"
      >
        <span
          className={`text-[20px] 3xl:text-[24px] font-semibold transition-all duration-200 ease-linear font-gelasio ${
            isOpen ? "text-primary" : ""
          }`}
        >
          {title}
        </span>
        <div
          className={`transition-all duration-200 ease-linear ${
            isOpen ? "" : "brightness-0 invert"
          }`}
        >
          <Image
            src={arrow}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            ref={arrowRef}
            className="h-5 w-5"
          />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0 z-[1] relative">
        <div className="p-6 pt-2">
          <p className="text-gray-600">{content}</p>
        </div>
        <div className="w-full lg:hidden block">
          <Image
            src={images[0]?.image}
            alt={images[0]?.titleAttr}
            title={images[0]?.titleAttr}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const valuesSection = [
  {
    img: pocket1,
    title:
      "We carefully inspect valuables like gold, silver, antiques, and electronics to assess their worth.",
    titleAttr: "Pawn Star Rome | Antique",
    altAttr: "Pawn Star Rome | Antique",
  },
  {
    img: pocket2,
    title:
      "We offer a fair and transparent price based on the value of your items.",
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
  },
  {
    img: pocket3,
    title:
      "Receive your cash immediately with no hassle or unnecessary delays.",
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
  },
];

const accordionData = [
  {
    title: "Jewelry",
    content:
      "We buy gold, silver, diamonds, and other jewelry pieces. Get cash for your unwanted rings, necklaces, and more.",
    images: [
      {
        image: image1,
        titleAttr: "Pawn Star Rome | Jewelry",
        altAttr: "Pawn Star Rome | Jewelry",
      },
    ],
  },
  {
    title: "Large Electronics",
    content:
      "Sell your large electronics like TVs, home audio systems, and appliances. Get fast cash for your valuable items today.",
    images: [
      {
        image: image2,
        titleAttr: "Pawn Star Rome | Electronics",
        altAttr: "Pawn Star Rome | Electronics",
      },
    ],
  },
  {
    title: "Electronics",
    content:
      "We buy all types of electronics, from phones and laptops to gaming consoles and cameras. Get cash quickly.",
    images: [
      {
        image: image3,
        titleAttr: "Pawn Star Rome | Computers, Laptops, and Desktops",
        altAttr: "Pawn Star Rome | Computers, Laptops, and Desktops",
      },
    ],
  },
  {
    title: "Video Games",
    content:
      "Sell your video games, consoles, and accessories. We offer competitive prices for both new and used games.",
    images: [
      {
        image: image4,
        titleAttr: "Pawn Star Rome | Video Games, Consoles, and Accessories",
        altAttr: "Pawn Star Rome | Video Games, Consoles, and Accessories",
      },
    ],
  },
  {
    title: "Computers",
    content:
      "Sell or pawn your computers, laptops, and desktops. Get cash offers for your used or outdated tech.",
    images: [
      {
        image: image5,
        titleAttr: "Pawn Star Rome | Computers, Laptops, and Desktops",
        altAttr: "Pawn Star Rome | Computers, Laptops, and Desktops",
      },
    ],
  },
  {
    title: "Musical Equipment",
    content:
      "We buy musical equipment like guitars, keyboards, drums, and amplifiers. Turn your instruments into cash with us.",
    images: [
      {
        image: image6,
        titleAttr: "Pawn Star Rome | Musical Equipment",
        altAttr: "Pawn Star Rome | Musical Equipment",
      },
    ],
  },
  {
    title: "Sporting Goods",
    content:
      "Sell your sporting goods like bicycles, golf clubs, and exercise equipment. Get top value for your gently used items.",
    images: [
      {
        image: image7,
        titleAttr: "Pawn Star Rome | Sporting Goods",
        altAttr: "Pawn Star Rome | Sporting Goods",
      },
    ],
  },
  {
    title: "Tools",
    content:
      "We buy power tools, hand tools, and more. Sell or pawn your tools for cash with quick and easy service.",
    images: [
      {
        image: image8,
        titleAttr: "Pawn Star Rome | Power Tools",
        altAttr: "Pawn Star Rome | Power Tools",
      },
    ],
  },
  {
    title: "Sports Memorabilia",
    content:
      "We buy sports memorabilia including autographed jerseys, balls, and collectibles. Get cash for your rare and valuable items.",
    images: [
      {
        image: image9,
        titleAttr: "Pawn Star Rome | Sporting Goods",
        altAttr: "Pawn Star Rome | Sporting Goods",
      },
    ],
  },
  {
    title: "Movies and Music",
    content:
      "Sell your movie DVDs, Blu-rays, and vinyl records. We offer cash for your movie and music collections.",
    images: [
      {
        image: image10,
        titleAttr: "Pawn Star Rome | DVDs, Blu-rays, and Vinyl Records",
        altAttr: "Pawn Star Rome | DVDs, Blu-rays, and Vinyl Records",
      },
    ],
  },
];
