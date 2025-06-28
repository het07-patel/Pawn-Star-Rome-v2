import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/watches/hero-watches.webp";
import watch1 from "@/assets/images/what-we-buy/watches/watch1.webp";
import watch2 from "@/assets/images/what-we-buy/watches/watch2.webp";
import watch9 from "@/assets/images/what-we-buy/watches/watch9.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import { LinkButton } from "@/components/button";
import AlternatingFeatureBlock from "@/components/alternatingFeatureBlock";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import WatchGalleryGrid from "@/components/WatchGalleryGrid";

export default function Watches() {
 
  const categoryData = {
    alternatingFeature: {
      feature: [
        {
          title: " 1. Trusted Brands We Accept",
          description:
            "We specialize in evaluating luxury timepieces from renowned brands like Rolex, Omega, Breitling, and TAG Heuer. Whether you're parting with a modern classic or a vintage favorite, our experts recognize true value and offer competitive payouts with complete transparency.",
          direction: "LTF",
          imgSrc: watch1,
          titleAttr: "Experienced Appraisal",
          altAttr: "Appraisal Expert Image",
        },
        {
          title: "2. Expert Evaluation, Every Time",
          description:
            "Our team brings years of experience in luxury watch assessment. We inspect each detail—movement, condition, authenticity, and more—to ensure accurate valuation. You get clear communication, no pressure, and a fast, respectful process that makes selling your watch feel seamless.",
          direction: "RTF",
          imgSrc: watch2,
          titleAttr: "Honest Deals Image",
          altAttr: "Customer Transaction",
        },
      ],
    },
  };
  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Luxury Timepieces, Honestly Valued"
        description="Trusted by collectors and casual sellers alike, we evaluate Rolex, Omega, and more with transparency, respect, and top cash value in the Rome area."
      />
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Timeless Craft, Instantly Rewarded Today"
          description=" From luxury classics to modern designer watches, we evaluate your timepiece with precision and care—offering fair, same-day payouts for trusted brands near Rome."
        />
      </section>

     <WatchGalleryGrid />

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Crafted for Time, Treasured for Life"
          description="Luxury watches are more than accessories. They are statements of style, history, and craftsmanship. We honor their true worth with expert evaluations, personalized service, and fair value for every treasured timepiece you bring in."
        />
      </section>

      {categoryData.alternatingFeature ? (
        <section className="container p-5 md:p-14 xl:p-16 2xl:pt-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 md:mb-16 2xl:mb-24 text-center font-bold uppercase">
            {categoryData.alternatingFeature.title}
          </h3>
          <div className="space-y-8 lg:space-y-24">
            {categoryData.alternatingFeature.feature.map((feature, i) => (
              <AlternatingFeatureBlock key={i} {...feature} />
            ))}
          </div>
        </section>
      ) : null}

     <section className="border border-primary mt-16"></section>

<section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      <div className="relative w-full">
        <div className="relative rounded-lg overflow-hidden shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <CustomImage
            src={watch9}
            className="w-full h-full object-cover"
          />
      </div>
      </div>

      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
    Local Service, Global Standards
        </h1>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
         Proudly serving the Rome area, we combine small-town trust with industry-leading expertise. Our commitment to professionalism and fairness has made us a reliable destination for those looking to sell watches with confidence and convenience.
        </p>
      </div>
    </div>
  </div>
</section>

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
