"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccordianOpenArrow from "@/assets/images/home-page/AccordianOpenArrow.svg";
import AccordianCloseArrow from "@/assets/images/home-page/AccordianCloseArrow.svg";

const HomePageAccordian = () => {
  const [openAccordion, setOpenAccordion] = useState(data[0].title);
  const handleAccordionToggle = (itemTitle) => {
    setOpenAccordion((prevOpen) => (prevOpen === itemTitle ? null : itemTitle));
  };

  return (
    <section className="w-full lg:w-[95%] max-w-[1800px] mx-auto px-4 py-16 lg:px-2 2xl:px-8">
      <div>
        <h2 className=" font-gelasio uppercase pb-8 text-3xl xl:text-5xl font-bold !leading-[3.5rem]">
          OUR SERVICES
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Main Image Container - Only visible on laptop and larger screens */}

        <div className="w-full lg:w-2/3 space-y-4">
          {data.map((item) => (
            <motion.div
              whileTap={{ scale: 0.98 }}
              key={`accordion-${item.title}`}
              onClick={() => handleAccordionToggle(item.title)}
              className={`cursor-pointer  pb-4 border-white/10 transition-colors hover:border-white/30 `}
            >
              <div className="flex justify-between items-center gap-4   lg:py-2 2xl:py-2  xl:w-[70%]">
                <h3 className="text-lg sm:text-xl lg:text-lg 2xl:text-xl font-gelasio">
                  {item.title}
                </h3>
                {openAccordion === item.title ? (
                  <Image
                    src={AccordianOpenArrow}
                    alt="Pawn Star Rome | Gold, Silver, Diamond"
                    title="Pawn Star Rome | Gold, Silver, Diamond"
                    width={20}
                    height={20}
                    priority
                  />
                ) : (
                  <Image
                    src={AccordianCloseArrow}
                    alt="Pawn Star Rome | Gold, Silver, Diamond"
                    title="Pawn Star Rome | Gold, Silver, Diamond"
                    width={20}
                    height={20}
                    priority
                  />
                )}
              </div>

              <AnimatePresence>
                {openAccordion === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="lg:mt-2 2xl:mt-4 space-y-2 text-sm sm:text-base text-white/60 font-light  xl:w-[70%]">
                      {item.desc.map((description, index) => (
                        <p key={`accordion-desc-${index}-${item.title}`}>
                          {description}
                        </p>
                      ))}

                      {/* Mobile Image - Only visible below laptop screen */}
                      <div className="lg:hidden mt-4 flex justify-center w-full">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                          ></motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="hidden videobox lg:flex rotate-[18.34deg] lg:w-1/3 justify-center items-start h-full sticky top-[20%] w-[60%] md:w-[50%] xl:w-[20%] 4xl:w-[20%] xl:h-[55vh] 4xl:h-[60vh] translate-x-[-20%]">
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
            }}
          >
            <source
              src={"videos/homePageAccordianVideo.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomePageAccordian;
const data = [
  {
    title: "1. Buying Gold and silver",
    desc: [
      "We buy gold, silver, coins, and bullion at top prices. Sell your valuables for fast cash with trusted pawn services in Rome.",
    ],
  },
  {
    title: "2. Pawn",
    desc: [
      "Pawn your gold, silver, coins, electronics, and more with trusted services in Rome. Get quick loans, fair valuations, and secure transactions for your valuables.",
    ],
  },
  {
    title: "3. Loans",
    desc: [
      "Get fast, reliable pawn loans on gold, silver, coins, electronics, and more. Secure quick cash with your valuables and flexible loan terms at our trusted Rome pawn shop.",
    ],
  },
  {
    title: "4. Coins, Gold and Silver",
    desc: [
      "Pawn or sell your coins, gold, and silver for top prices. Get quick cash offers with trusted service at our Rome pawn shop.",
    ],
  },
  {
    title: "5. Electronics",
    desc: [
      "Turn your unwanted electronics into cash. We buy phones, laptops, tablets, and more with fast, secure transactions and fair offers at our trusted Rome pawn shop.",
    ],
  },
  {
    title: "6. Watches",
    desc: [
      "Get cash for your watches, whether they're luxury, vintage, or everyday timepieces. We offer fair value and reliable service for all watch brands in Rome.",
    ],
  },
  {
    title: "7. Power Tools",
    desc: [
      "We buy and pawn power tools of all kinds. Get cash for your drills, saws, and more with fast, reliable service in Rome.",
    ],
  },

  {
    title: "8. Antique",
    desc: [
      "Unlock the value of your antiques. We offer competitive prices for rare and collectible items, providing reliable service and quick cash at our trusted Rome pawn shop.",
    ],
  },
  {
    title: "9. Diamond and Jewelry",
    desc: [
      "Turn your diamond and jewelry pieces into cash. We offer fair prices and expert appraisals for rings, necklaces, bracelets, and more at our trusted Rome pawn shop.",
    ],
  },
  {
    title: "10. Bullions",
    desc: [
      "We buy and pawn gold and silver bullions at great prices. Get expert evaluations and fast cash with reliable service at our Rome pawn shop.",
    ],
  },
  {
    title: "11. Collateral Loan Brokers",
    desc: [
      "Get a collateral loan with ease. We offer quick, secure loans using your valuables—gold, jewelry, electronics, and more—as collateral at our trusted Rome pawn shop.",
    ],
  },
  {
    title: "12. Broken Gold, Silver, Jewelry",
    desc: [
      "Turn your broken gold, silver, and jewelry into cash. We offer fair prices for damaged items with quick, reliable service at our Rome pawn shop.",
    ],
  },
];
