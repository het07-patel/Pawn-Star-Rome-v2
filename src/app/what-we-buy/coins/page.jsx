import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/coins/hero-bg.webp";
import HeadingTitle from "@/components/HeadingTitle";
import coin1Img from "@/assets/images/what-we-buy/coins/coin1.webp";
import coin2Img from "@/assets/images/what-we-buy/coins/coin2.webp";
import coin3Img from "@/assets/images/what-we-buy/coins/coin3.webp";
import featureImg1 from "@/assets/images/what-we-buy/coins/feature-1.webp";
import featureImg from "@/assets/images/what-we-buy/coins/feature.webp";
import featureImg2 from "@/assets/images/what-we-buy/coins/coin8.webp";
import featureImg3 from "@/assets/images/what-we-buy/coins/coin9.webp";
import coinImage from "@/assets/images/what-we-buy/coins/coin7.webp";
import storyBg from "@/assets/images/what-we-buy/coins/coins-bg.webp";
import heroImage from "@/assets/images/what-we-buy/coins/coin-bg.webp";
import CustomImage from "@/components/customImage";
import { LinkButton } from "@/components/button";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import AlternatingFeatureBlock from "@/components/alternatingFeatureBlock";
import CoinsStorySection from "@/components/coinStory";
import CoinsArticlesSection from "@/components/coinsArticle";
import HeroSection from "@/components/HeroImage.jsx";

export default function Coins() {

  const categoryData = {
    alternatingFeature: {
      title: "Better Value, Every Time",
      feature: [
        {
          title: "Trusted Local Experts",
          description:
            "With years of experience in coin buying, we provide accurate evaluations and honest offers you can trust—no pressure, just professional service in Rome.",
          direction: "LTF",
          imgSrc: featureImg1,
          titleAttr: "Bullion and Precious Metal Coins",
          altAttr: "Bullion and Precious Metal Coins",
        },
        {
          title: "Fast & Easy Processs",
          description:
            "Walk in with your coins, get them evaluated on the spot, and leave with cash in minutes. No appointments, no long wait times.",
          direction: "RTF",
          imgSrc: featureImg,
          titleAttr: "Rare and Collectible Coins",
          altAttr: "Rare and Collectible Coins",
        },
        {
          title: "Top Market Prices",
          description:
            "We stay up to date with the latest gold, silver, and numismatic values to ensure you get the best possible payout.",
          direction: "LTF",
          imgSrc: featureImg2,
          titleAttr: "Bullion and Precious Metal Coins",
          altAttr: "Bullion and Precious Metal Coins",
        },
        {
          title: "All Coins Accepted",
          description:
            "From rare collectibles to everyday silver coins, we buy coins in all conditions—U.S., foreign, bullion, commemorative, and more.",
          direction: "RTF",
          imgSrc: featureImg3,
          titleAttr: "Rare and Collectible Coins",
          altAttr: "Rare and Collectible Coins",
        },
      ],
    },
  };

  const coinArticles = [
    {
      id: 1,
      imgSrc: coin1Img,
      title: "Gold and Silver Coins",
      desc: "Get paid top rates for gold and silver coins—graded, ungraded, circulated, or bullion.",
    },
    {
      id: 2,
      imgSrc: coin2Img,
      title: "Rare and Collectible Coins",
      desc: "Have a rare find? We appraise and buy collectible coins with historical or numismatic value.",
    },
    {
      id: 3,
      imgSrc: coin3Img,
      title: "Foreign and Commemorative Coins",
      desc: "We accept coins from around the world, including special editions and commemoratives—no collection is too small or large.",
    },
  ];

  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Turn Coins Into Cash Today"
        description="Bring in your gold, silver, or collectible coins and get a fair, fast cash offer from trusted local buyers near Rome."
      />

      <CoinsArticlesSection articles={coinArticles} />

      <section className="container py-10 md:py-14 xl:py-16">
        <HeadingTitle
          sectionName="Your Coins Have Value"
          description="From pocket change to prized collections, we pay top dollar for coins of all kinds—gold, silver, rare, or historic. No appointment needed."
        />
      </section>
      <section className="container mb-10 md:mb-14 xl:mb-16">
        <CoinsStorySection
          imageSrc={coinImage}
          bgImageSrc={storyBg} />
      </section>


      {categoryData.alternatingFeature ? (
        <section className="container p-10 md:p-14 xl:p-12 2xl:p-16">
          <h3 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-gelasio leading-tight text-primary mb-10">
            {categoryData.alternatingFeature.title}
          </h3>
          <div className="space-y-8 lg:space-y-24">
            {categoryData.alternatingFeature.feature.map((feature, i) => (
              <AlternatingFeatureBlock key={i} {...feature} />
            ))}
          </div>
        </section>
      ) : null}


      <section className="container mb-10">
        <HeroSection
          imgSrc={heroImage}
          title="Pawn Star Rome"
          heading="Your Legacy Deserves More Than Ordinary"
          subtext="Discover coins that speaks to your story crafted with rare stones, timeless design details."
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
  );
}