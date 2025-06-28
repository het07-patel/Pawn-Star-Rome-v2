"use client";
import CustomImage from "@/components/customImage";
import Image1 from "@/assets/images/what-we-buy/cars/Img3.webp"; // Replace with real image
import Image2 from "@/assets/images/what-we-buy/cars/Img4.webp";
import HeadingTitle from "@/components/HeadingTitle";

export default function CarContain() {
  return (
    <>
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Where Every Car Has a Story"
          description=" Unique vehicles represent more than transportation. They carry a legacy shaped by design, craftsmanship, and character. Whether it's a rare vintage model or a custom-modified ride, we recognize the value that lies beneath the surface.
          With our tailored evaluation and secure process, you can unlock the funds you need while keeping your vehicle safe and protected. No clutter, no hassle—just a service made for collectors, enthusiasts, and automotive visionaries."
        />
      </section>
      <section className="w-full py-20 sm:py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="w-full lg:w-1/3 space-y-4 sm:px-6 sm:text-center lg:text-left text-left md:text-center md:mx-4 mt-6 md:mt-2 lg:mt-11">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Classic Wheels. Modern Care.
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Every classic car deserves more than just a price tag. Whether
              tucked away in a garage or proudly showcased, your vehicle tells a
              story worth preserving. We honor that value with thoughtful
              attention and respect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full lg:w-1/2 justify-center items-center">
            <div className="rounded-2xl overflow-hidden w-[260px] sm:w-[280px] md:w-[300px] h-[300px] sm:h-[330px] md:h-[350px]">
              <CustomImage
                src={Image1}
                alt="Project 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden w-[260px] sm:w-[280px] md:w-[300px] h-[300px] sm:h-[330px] md:h-[350px]">
              <CustomImage
                src={Image2}
                alt="Project 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
