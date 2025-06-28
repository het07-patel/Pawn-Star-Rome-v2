import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/electronic-and-tool/hero-tools.webp";
import Tool1 from "@/assets/images/what-we-buy/electronic-and-tool/Img1.webp";
import Elec1 from "@/assets/images/what-we-buy/electronic-and-tool/Img2.webp";
import Elec2 from "@/assets/images/what-we-buy/electronic-and-tool/Img3.webp";
import Elec3 from "@/assets/images/what-we-buy/electronic-and-tool/Img4.webp";
import Elec4 from "@/assets/images/what-we-buy/electronic-and-tool/Img5.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
import { LinkButton } from "@/components/button";
import ToolInLine from "@/components/toolinline";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import NewInCollectionSection from "@/components/newCollection";

export default function ElectronicTools() {
  return (
    <>
      <Hero
        imageSrc={herobg}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Turn Gadgets and Gear Into Cash"
        description="Sell your used electronics, power tools, and gadgets for fast cash. We offer fair prices, quick evaluations, and a hassle-free selling experience near Rome."
      />
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Your Trusted Buyers of Tools & Electronics"
          description="From smartphones and laptops to drills and power tools, we purchase a wide range of electronics and equipment. Our team provides honest evaluations, competitive offers, and a smooth, no-stress selling experience you can count on."
        />
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="border-2 border-primary p-1 rounded-md shadow-lg w-64 h-80 sm:w-72 sm:h-80">
              <CustomImage
                src={Tool1}
                alt="Electronics Tool Station"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 border-2 border-primary rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold tracking-widest text-gray-100 mb-4">
              When Tools Rest, We Make Them Work
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              Even idle tools and outdated electronics have purpose. Whether
              it’s a drill you no longer use or a tablet that’s been replaced,
              we breathe new life into them with honest evaluations, fair cash
              offers, and a process that’s fast, friendly, and reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Top-Tier Electronics"
          description="Discover value in the electronics you no longer use — from smartphones and laptops to cameras, audio gear, and gaming systems. Whether you're selling near Rome or simply upgrading, we buy modern electronics with fair offers and expert care. Turn unused tech into cash with ease."
        />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <CustomImage
                src={Elec1}
                alt="Smartphones, Tablets & Smartwatches"
                className="w-full h-auto object-cover mb-3 rounded-xl"
              />
              <p className="text-sm ">Smartphones, Tablets & Smartwatches</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CustomImage
                src={Elec2}
                alt="Laptops, Headphones & Gaming Consoles"
                className="w-full h-auto object-cover mb-3 rounded-xl"
              />
              <p className="text-sm ">Laptops, Headphones & Gaming Consoles</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CustomImage
                src={Elec3}
                alt="Power Tools, Drills & Handheld Devices"
                className="w-full h-auto object-cover mb-3 rounded-xl"
              />
              <p className="text-sm text-gray-300">
                Power Tools, Drills & Handheld Devices
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CustomImage
                src={Elec4}
                alt="Cameras, Speakers & Everyday Tech Gear"
                className="w-full h-auto object-cover mb-3 rounded-xl"
              />
              <p className="text-sm text-gray-300">
                Cameras, Speakers & Everyday Tech Gear
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Essential Tools, Expertly Valued"
          description="We buy a wide range of tools near Rome—from power drills and saws to hand tools and full toolkits. Whether you're a contractor, mechanic, or weekend DIYer, our team offers fast evaluations and competitive cash for the tools you no longer need."
        />
      </section>

      <NewInCollectionSection />
      <ToolInLine />

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
