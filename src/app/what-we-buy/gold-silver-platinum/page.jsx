import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/gold-silver-platinum/hero-bg1.webp";
import ourValues1 from "@/assets/images/what-we-buy/gold-silver-platinum/img1.webp";
import ourValues2 from "@/assets/images/what-we-buy/gold-silver-platinum/img2.webp";
import ourValues3 from "@/assets/images/what-we-buy/gold-silver-platinum/img3.webp";
import ourValues4 from "@/assets/images/what-we-buy/gold-silver-platinum/img4.webp";
import diamondJewelry1 from "@/assets/images/what-we-buy/gold-silver-platinum/diamond-jewelry-4.webp";
import diamondJewelry2 from "@/assets/images/what-we-buy/gold-silver-platinum/diamond-jewelry-5.webp";
import diamondJewelry3 from "@/assets/images/what-we-buy/gold-silver-platinum/diamond-jewelry-6.webp";
import diamondJewelry6 from "@/assets/images/what-we-buy/gold-silver-platinum/diamond-jewelry-1.webp";
import diamondJewelry5 from "@/assets/images/what-we-buy/gold-silver-platinum/diamond-jewelry-9.webp";
import vintage4 from "@/assets/images/what-we-buy/gold-silver-platinum/img6.webp";
import vintage5 from "@/assets/images/what-we-buy/gold-silver-platinum/img5.webp";
import vintage6 from "@/assets/images/what-we-buy/gold-silver-platinum/img8.webp";
import vintage10 from "@/assets/images/what-we-buy/gold-silver-platinum/img7.webp";
import sectionBg from "@/assets/images/what-we-buy/gold-silver-platinum/bg-img.webp";
import ImageBg from "@/assets/images/what-we-buy/gold-silver-platinum/sectionbg.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import DiamondJewelrySwipper from "@/components/DiamondJewelrySwipper";
import { LinkButton } from "@/components/button";
import TwoImagesAndCenterText from "@/components/TwoImagesAndCenterText";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import HeroSection from "@/components/HeroImage.jsx";
const values = [
  {
    image: ourValues1,
    altAttr: "",
    titleAttr: "",
    title: "Gold Jewelry",
  },
  {
    image: ourValues2,
    altAttr: "",
    titleAttr: "",
    title: "Silver & Platinum",
  },
  {
    image: ourValues3,
    altAttr: "",
    titleAttr: "",
    title: "Bullion & Coin",
  },
  {
    image: ourValues4,
    altAttr: "",
    titleAttr: "",
    title: "Scrap & Broken Jewelry",
  },
];

export const carouselImages = [
  {
    image: diamondJewelry1,
    title: "Estate & Antique Jewelry",
    link: "/contact",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry3,
    title: "Designer & Custom Pieces",
    link: "/contact",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry2,
    title: "Coins, Bullion & Bars",
    link: "/contact",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry5,
    title: "Platinum Jewelry",
    link: "/contact",
    altAttr: "",
    titleAttr: "",
  },
];

const collectionArray = [
  {
    title: "1. Hidden Drawer Finds",
    description:
      "Old chains, singles earrings, or tangled gold? We’ll turn your forgotten pieces into instant money.",
    image: vintage5,
    titleAttr: "Diamond Earring | Diamond Jewelry",
    altAttr: "Pawn Star Rome| Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "2. Passed-Down Treasures",
    description:
      "Heirloom jewelry or vintage pieces collecting dust? We value their story—and pay accordingly.",
    image: vintage6,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Pawn Star Rome | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "3. Collector’s Goldmine",
    description:
      "Gold coins, silver bars, or limited-edition bullion—we pay market-accurate prices on the spot.",
    image: vintage10,
    titleAttr: "Diamond Ring | Diamond Jewelry",
    altAttr: "Pawn Star Rome| Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "4. Broken But Valuable",
    description:
      "Don't toss that broken bracelet—scrap gold and silver still hold real value in every gram.",
    image: vintage4,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Pawn Star Rome | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
];

export default function GoldSilverPlatinum() {
  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Trusted Precious Metal Buyers"
        description="We buy gold, silver, and platinum for top cash value near Rome—fast, fair, easy."
      />
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Top Prices for Precious Metals"
          description="We buy gold, silver, and platinum in all forms—coins, jewelry, bullion, and scrap. Whether broken or whole, we offer top market value with honest, on-the-spot offers near Rome."
        />

        <div className="py-16 2xl:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-6 justify-center">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border-2 border-black ${index % 2 === 0 ? "lg:rotate-12" : "lg:-rotate-12"
                  } 4xl:w-[357px] 4xl:h-[450px] 3xl:w-[300px] 3xl:h-[400px] xl:w-[250px] xl:h-[350px] lg:w-[200px] lg:h-[300px] w-full h-[450px]`}
              >
                <CustomImage
                  srcAttr={value.image}
                  altAttr={value.altAttr}
                  layout="fill"
                  titleAttr={value.titleAttr}
                  className="object-cover w-full h-full rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center font-bold text-lg md:text-lg lg:text-xl">
                  {value.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="p-10 md:p-14 xl:p-16 2xl:p-20">
        <div>
          <HeadingTitle sectionName="We Buy It All" />
        </div>
        <div className="pt-8">
          <DiamondJewelrySwipper images={carouselImages} />
        </div>
      </section>

      <section className="px-10 md:px-14 xl:px-16 2xl:px-20">
        <div>
          <HeadingTitle sectionName="Your Local Precious Metal Experts" />
        </div>
      </section>
      <div className="pt-4 md:pt-8 lg:pt-12 2xl:pt-16">
        <TwoImagesAndCenterText
          title="Selling Gold and Silver Has Never Been Easier"
          description="Walk in with your items and walk out with cash—no appointments, no pressure. We evaluate on the spot and offer fair, transparent prices based on current market rates. Quick, secure, and hassle-free."
          backgroundColor=""
          backgroundImage={sectionBg}
          textColor="text-basewhite"
        />
      </div>


      <section className="py-10 md:py-14 xl:py-16 2xl:py-20">
        <HeadingTitle sectionName="Turn Items Into Cash" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12 md:container mx-auto px-4 2xl:pt-16 lg:pt-10 md:pt-12 pt-12">
          {collectionArray.map((item, index) => {
            const isReverse = index > 1;
            return (
              <div
                key={item?.description}
                className={`
                    flex flex-col 
                    lg:flex-row 
                    ${isReverse ? "lg:flex-row-reverse md:pt-12 xl:pt-16" : ""}
                    items-center lg:items-start 
                     md:gap-8 lg:gap-4 2xl:gap-12 w-full
                   `}
              >
                <div className="relative w-[300px] sm:w-[320px] md:w-[320px] lg:w-[250px] xl:w-[280px] 2xl:w-[350px] 2xl:h-[300px] sm:h-[270px] md:h-[270px] lg:h-[200px] xl:h-[240px] shrink-0">
                  <div className="absolute bottom-5 left-5 w-full h-full border-2 border-primary rounded-2xl z-0" />
                  <div className="relative z-10">
                    <CustomImage
                      src={item?.image}
                      titleAttr={item?.titleAttr}
                      altAttr={item?.altAttr}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left flex flex-col gap-1 justify-center h-full md:max-w-[376px] py-6 md:py-6">
                  <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-gelasio">
                    {item?.title}
                  </h3>
                  <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-[24px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mb-10">
      <HeroSection
      imgSrc={ImageBg}
      heading="Visit Us Today for a Free Cash Quote"
      subtext="Walk in with your gold, silver, or platinum and receive a no-obligation quote on the spot. Our experts ensure fair pricing, quick evaluations, and immediate payment—no pressure, just honest service you can trust."
    />
      </section>

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
  )
}
