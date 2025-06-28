'use client';
import CustomImage from "@/components/customImage";
import LeftImage from "@/assets/images/what-we-buy/cars/ImgLeft.webp";
import RightImage from "@/assets/images/what-we-buy/cars/ImgRight.webp";

export default function CarSection() {
  return (
<section className="w-full py-20 ">
  <div className="container mx-auto px-4 flex flex-col md:flex lg:flex-row items-center justify-between gap-6">
    <div className="w-full transform -rotate-3">
      <CustomImage
        src={LeftImage}
        alt="Left Person"
        className="rounded-xl shadow-xl"
        priority
      />
    </div>

    <div className="w-full  text-center space-y-6 px-2">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
       Quick Appraisals, No Guesswork
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
     Skip the waiting and wondering. Our team provides fast, accurate evaluations so you know exactly what your car is worth. It's a simple, straightforward process built around clarity, fairness, and your convenience.
      </p>
    </div>

    <div className="w-full  transform rotate-3">
      <CustomImage
        src={RightImage}
        alt="Right Person"
        className="rounded-xl shadow-xl"
      />
    </div>
  </div>
</section>
  );
}