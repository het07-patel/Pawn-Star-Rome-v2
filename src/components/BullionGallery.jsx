"use client";
import Image3 from "@/assets/images/what-we-buy/bullion/Img3.webp";
import Image7 from "@/assets/images/what-we-buy/bullion/Img7.webp";
import Image8 from "@/assets/images/what-we-buy/bullion/Img8.webp";
import Image9 from "@/assets/images/what-we-buy/bullion/Img9.webp";
import Image10 from "@/assets/images/what-we-buy/bullion/Img10.webp";
import Image11 from "@/assets/images/what-we-buy/bullion/Img11.webp";
import Image12 from "@/assets/images/what-we-buy/bullion/Img12.webp";
import CustomImage from "@/components/customImage";
import HeadingTitle from "@/components/HeadingTitle";

export default function BullionGallery() {
  return (
    <>
      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
        <HeadingTitle
          sectionName="Your Bullion, Handled with Care"
          description="Every piece of bullion is treated with the respect it deserves. Our secure handling, expert evaluation, and transparent pricing ensure you feel confident at every step. Whether you're new to bullion or experienced, you're in good hands."
        />
      </section>

      <section className="mb-10">
        <div className="relative w-full min-h-screen mt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CustomImage
              src={Image3}
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-14 md:py-16 text-center text-white">
       <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-10 sm:mb-8">
              <CustomImage
                src={Image7}
                alt="Gallery 1"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
              <CustomImage
                src={Image8}
                alt="Gallery 2"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
              <CustomImage
                src={Image9}
                alt="Gallery 3"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
              <CustomImage
                src={Image10}
                alt="Gallery 4"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
              <CustomImage
                src={Image11}
                alt="Gallery 5"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
              <CustomImage
                src={Image12}
                alt="Gallery 6"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[220px] sm:h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
