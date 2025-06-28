"use client";
import CustomImage from "@/components/customImage";
import leftImg from "@/assets/images/what-we-buy/electronic-and-tool/Img8.webp";
import rightImg from "@/assets/images/what-we-buy/electronic-and-tool/Img7.webp";

export default function NewInCollectionSection() {
  return (
    <section className="py-8 px-4">
      <div className="text-center border-t border-primary py-6 sm:py-6 md:py-8 lg:py-10 2xl:py-12">
        <p className="italic text-primary text-2xl">
          “Professional-Grade Workshop for Daily Projects”
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center">
        <div
          className="relative p-8 md:w-1/2 z-10 rounded-lg sm:rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${leftImg.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg sm:rounded-xl"></div>
          <div className="relative bg-opacity-60 p-20 z-10">
            <p className="text-2xl font-semibold tracking-wide mb-4">
              Precision Tool Collection
            </p>
            <p className="text-xl font-semibold mb-4 ">
              "Crafted for performance, built to last"
            </p>
          </div>
        </div>

        <div className="md:w-1/2 -mt-12 md:mt-0 md:ml-[-80px]">
          <CustomImage
            src={rightImg}
            alt="Gold and Diamond Jewelry"
            title="Gold and Diamond Jewelry"
            width={600}
            height={500}
            className="rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
