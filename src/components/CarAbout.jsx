"use client";
import CustomImage from "@/components/customImage";
import CarImage from "@/assets/images/what-we-buy/cars/Img1.webp"; // Replace with your actual image path

export default function AboutSection() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 2xl:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 items-center gap-10 2xl:gap-20">
        <div className="relative space-y-6 text-center md:text-left  md:px-1 2xl:px-0 lg:px-2">
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] 2xl:text-[6rem] font-extrabold text-gray-200 leading-none z-0 select-none block md:absolute md:-top-10 md:-left-2 text-center md:text-left mb-8">
           All Makes
          </h1>

          <h2 className="relative text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold z-10">
            <span className="text-primary">And Models</span>{" "}
            <span className="text-gray-800">WELCOME</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed z-10 relative">
           We accept a wide range of vehicles, from daily drivers to weekend cruisers, regardless of brand or condition. Whether it's well-loved or lightly used, your car still holds value.

          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed z-10 relative">
            Our team offers honest evaluations with no pushy sales tactics. We focus on creating a smooth, respectful process that puts your needs first and makes every step easy.
          </p>
        </div>

        <div className="relative z-10 px-2 md:px-6 lg:px-0">
          <div className="w-full h-[250px] sm:h-[400px] md:h-[350px] lg:h-[400px] 2xl:h-[480px] rounded-[2rem] overflow-hidden shadow-xl">
            <CustomImage
              src={CarImage}
              alt="Sports Car"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
