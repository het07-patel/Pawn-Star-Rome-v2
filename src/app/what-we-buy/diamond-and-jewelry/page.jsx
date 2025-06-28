import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/diamond-and-jewelry/hero-bg.webp";
import luxuryImage from "@/assets/images/what-we-buy/diamond-and-jewelry/newcollection.webp";
import img1 from "@/assets/images/what-we-buy/diamond-and-jewelry/image1.webp";
import img2 from "@/assets/images/what-we-buy/diamond-and-jewelry/image2.webp";
import img3 from "@/assets/images/what-we-buy/diamond-and-jewelry/image3.webp";
import img4 from "@/assets/images/what-we-buy/diamond-and-jewelry/image4.webp";
import img5 from "@/assets/images/what-we-buy/diamond-and-jewelry/image5.webp";
import img6 from "@/assets/images/what-we-buy/diamond-and-jewelry/image6.webp";
import img9 from "@/assets/images/what-we-buy/diamond-and-jewelry/image9.webp";
import img10 from "@/assets/images/what-we-buy/diamond-and-jewelry/image10.webp";
import img11 from "@/assets/images/what-we-buy/diamond-and-jewelry/image11.webp";
import img12 from "@/assets/images/what-we-buy/diamond-and-jewelry/image12.webp";
import diamondJewelry5 from "@/assets/images/what-we-buy/diamond-and-jewelry/image7.webp";
import diamondJewelry6 from "@/assets/images/what-we-buy/diamond-and-jewelry/image8.webp";
import sectionBg from "@/assets/images/what-we-buy/diamond-and-jewelry/bg-img.webp";
import CustomImage from "@/components/customImage";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import { LinkButton } from "@/components/button";
import HeadingTitle from "@/components/HeadingTitle";
import SwiperSection from "@/components/swiper";
import TwoImagesAndCenterText from "@/components/TwoImagesAndCenterText";
import TwoMediaGrid from "@/components/TwoImagesGrid";

export default function DiamondJewelry() {

  const slideData = [
    {
      image: img1,
      text: "Earrings & Studs",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img2,
      text: "Luxury Designer Pieces",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img3,
      text: "Diamond Rings",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img4,
      text: "Wedding & Engagement Sets",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img5,
      text: "Vintage & Estate Jewelry",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img6,
      text: "Gold Necklaces",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img11,
      text: "Bracelets & Bangles",
      titleAttr: "",
      altAttr: "",
    },
    {
      image: img12,
      text: "Custom & Unique Designs",
      titleAttr: "",
      altAttr: "",
    },
  ];

  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Cash for Diamonds & Jewelry"
        description="From engagement rings to gold necklaces, we make selling simple, secure, and rewarding every step of the way."
      />


      <section className="container py-16">
        <HeadingTitle
          sectionName="Turn Jewelry Into Instant Cash"
          description="Sell your diamond rings, gold jewelry, or designer pieces with ease. We offer transparent evaluations, competitive payouts, and a reputation Rome locals rely on for trusted service."
        />

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row md:items-center mt-8 gap-8 md:gap-12">

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="w-full rounded rounded-lg overflow-hidden">
              <CustomImage
                src={luxuryImage}
                alt="Luxury Gold Collection"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 leading-tight">
              Where Timeless Beauty Meets Instant Cash for Jewelry
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Let go of what no longer serves you and unlock the value hidden in your jewelry box. From classic diamond rings to designer gold pieces, we offer expert evaluations, transparent pricing, and immediate cash—blending luxury, trust, and convenience in every transaction.ce.
              The timeless beauty of gold meets the captivating allure of precious stones.
            </p>
          </div>

        </div>
      </section>

      <section className="p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-16">
        <HeadingTitle
          sectionName="Discover the Value of Your Diamonds, Gold, and Fine Jewelry"
          description="Expert appraisals, honest offers, and instant cash—no appointment needed.."
        />

        {/* Swiper */}
        <SwiperSection slides={slideData} />
      </section>

      <section className="px-10 md:px-14 xl:px-16 2xl:px-20">
        <div>
          <HeadingTitle 
          sectionName="Where Your Items Matter"
          description="Whether it’s a diamond ring or broken electronics, we treat every item with care—and pay what it’s truly worth."
           />
        </div>
      </section>
      <div className="pt-4 md:pt-8 lg:pt-12 2xl:pt-14">
        <TwoImagesAndCenterText
          title="We Buy More Than Just Jewelry"
          description="Beyond diamonds and gold, we purchase antiques, coins, silver, luxury watches, electronics, and even used cars. Our team offers expert appraisals, transparent pricing, and instant payouts—making us Rome’s trusted destination for selling valuables of all kinds."
          leftImage={diamondJewelry5}
          rightImage={diamondJewelry6}
          leftTitleAttr=""
          rightAltAttr=""
          rightTitleAttr=""
          leftAltAttr=""
          backgroundColor=""
          backgroundImage={sectionBg}
          textColor="text-basewhite"
        />
      </div>


      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Honest Appraisals. Fast Cash. Exceptional Customer Experience."
          description="We make selling simple. Whether it’s diamonds, antiques, or electronics, expect respectful service, accurate evaluations, and cash in hand—all in one smooth, trusted visit."
        />
      </section>

      <TwoMediaGrid
        heading="Our Craft"
        description="Handcrafted excellence in every detail."
        leftType="image"
        leftSrc={img9}
        rightType="image"
        rightSrc={img10}
      />

      <section className="relative py-8 ">
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