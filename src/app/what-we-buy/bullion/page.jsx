import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/bullion/hero-bullion.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import { LinkButton } from "@/components/button";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import BullionSection from "@/components/BullionSection";
import BullionCarousel from "@/components/BullionCarousel";
import BullionGallery from "@/components/BullionGallery";
import BullionContain from "@/components/BullionContain";

export default function Bullion() {
  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Your Bullion, Our Trusted Expertise"
        description="Bullion is more than metal. It is value in its purest form. We help you buy or sell with complete confidence and transparency in every transaction."
      />

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Experience the True Worth of Bullion"
          description="From gold bars to silver coins, we assess every piece with expert care. Enjoy honest pricing, quick evaluations, and a smooth process designed for those who value both time and transparency."
        />
      </section>

      <BullionSection />

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Types of Bullion We Accept"
          description="We evaluate and purchase a wide range of bullion forms including gold and silver bars, coins, and rounds. No matter the weight or brand, our experts ensure each piece is carefully assessed for its full market value."
        />
      </section>

      <BullionContain />
      <BullionCarousel />
      <BullionGallery />

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
