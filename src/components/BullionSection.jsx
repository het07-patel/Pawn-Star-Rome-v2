"use client";
import CustomImage from "@/components/customImage";
import Image1 from "@/assets/images/what-we-buy/bullion/Img1.webp";
import Image2 from "@/assets/images/what-we-buy/bullion/Img2.webp";
import Image3 from "@/assets/images/what-we-buy/bullion/Img3.webp";

export default function BullionSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Bullion Holds Strong Value
          </h2>
          <p className="text-base md:text-lg">
            Bullion is not just a precious metal. It is a timeless asset.
            Whether you are selling for quick cash or shifting your investment,
            it offers stability and liquidity. We help you make the most of
            every ounce.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-center">
          <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl overflow-hidden">
            <CustomImage
              src={Image1}
              alt="Image 1"
              title="Necklace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl overflow-hidden">
            <CustomImage
              src={Image2}
              alt="Image 2"
              title="Necklace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[220px] sm:h-[260px] md:h-[280px] rounded-2xl overflow-hidden">
            <CustomImage
              src={Image3}
              alt="Image 3"
              title="Necklace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
