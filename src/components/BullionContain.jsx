"use client";
import CustomImage from "@/components/customImage";
import Image4 from "@/assets/images/what-we-buy/bullion/Img4.webp";
import Image5 from "@/assets/images/what-we-buy/bullion/Img5.webp";
import Image6 from "@/assets/images/what-we-buy/bullion/Img6.webp";

export default function BullionContain() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 py-10 md:px-10 md:py-16 lg:p-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 row-span-2 h-48 sm:h-60 md:h-72 lg:h-96 rounded-xl overflow-hidden">
          <CustomImage
            src={Image4}
            alt="Image 4"
            title="Tall"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-24 sm:h-28 md:h-36 lg:h-44 rounded-xl overflow-hidden">
          <CustomImage
            src={Image5}
            alt="Image 5"
            title="Top Right"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-24 sm:h-28 md:h-36 lg:h-44 rounded-xl overflow-hidden">
          <CustomImage
            src={Image6}
            alt="Image 6"
            title="Bottom Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  text-center md:text-center px-2 sm:px-4 md:px-8 lg:p-20">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
       Gold and Silver Coins
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-sm">
         We accept bullion coins from trusted mints such as the U.S. Mint, Royal Canadian Mint, and more. Whether it’s American Eagles, Maple Leafs, or Krugerrands, we provide clear evaluations and competitive payouts.
        </p>
      </div>
    </section>
  );
}
