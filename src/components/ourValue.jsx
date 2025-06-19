import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import handshake from "@/assets/images/about-us/handshake.webp";
import team from "@/assets/images/about-us/team.webp";
import bussinessPlan from "@/assets/images/about-us/bussiness-plan.webp";
import guidingValues from "@/assets/images/about-us/guiding-values.webp";
import Image from "next/image";

const ourValueContent = [
  {
    img: handshake,
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    description:
      "We offer honest appraisals and transparent transactions, ensuring trust with every customer.",
  },
  {
    img: team,
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    description:
      "We provide competitive prices for gold, silver, electronics, and more, valuing your items properly.",
  },
  {
    img: bussinessPlan,
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    description:
      "Our services are designed with your convenience in mind, offering quick and reliable solutions.",
  },
  {
    img: guidingValues,
    titleAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    altAttr: "Pawn Star Rome | Gold, Silver, Diamond",
    description:
      "With years of experience, we ensure accurate evaluations and knowledgeable guidance for every transaction.",
  },
];

export default function OurValue() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
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

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#171717] px-3 2xl:px-20 py-10 2xl:py-24 mb-20 2xl:mb-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="container gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="space-y-2 2xl:space-y-4 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
            className="font-semibold font-gelasio text-3xl 2xl:text-5xl"
          >
            <h3>We Live</h3>
            <h3 className="lg:italic">Our Values</h3>
          </motion.div>
          <motion.p
            className="lg:w-4/5 2xl:text-xl 2xl:w-[60%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          >
            We uphold our values through honest transactions, fair pricing, and
            exceptional customer service every day.
          </motion.p>
        </div>
        <div>
          <div className="space-y-5 md:space-y-2 2xl:space-y-4">
            {ourValueContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 30,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                style={{ border: "0.5px solid #696969" }}
                className="overflow-hidden shadow-lg bg-approxblack flex flex-col md:flex-row items-center group"
              >
                <Image
                  src={item.img}
                  alt={item.altAttr}
                  title={item.titleAttr}
                  className="object-cover w-full md:w-40 md:h-28 transition-all duration-300 md:group-hover:-rotate-12 md:group-hover:scale-110"
                />
                <div className="py-4 px-4 lg:px-6 2xl:px-8 lg:p-3">
                  <p className="text-sm 2xl:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
