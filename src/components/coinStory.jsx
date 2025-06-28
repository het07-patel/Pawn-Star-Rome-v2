"use client";

import CustomImage from "./customImage";

export default function CoinsStorySection({ imageSrc, bgImageSrc }) {
  return (
    <section
      className="relative px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImageSrc.src})`,
      }}
    >
      {/* Optional: Overlay for better text contrast */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">
        <div>
          <h2 className="text-xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px] font-gelasio text-white">
            Coins We’re Looking For:
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="md:text-md lg:text-lg 2xl:text-[24px] font-bold text-white">U.S. Gold Coins</h4>
              <p className="md:text-md lg:text-lg 2xl:text-[24px] mt-1 text-white">
                We buy all types of American gold coins, including Eagles, Double Eagles, and Liberty Heads at top market value.
              </p>
            </div>

            <div>
              <h4 className="md:text-md lg:text-lg 2xl:text-[24px] font-bold text-white">Silver Bullion Coins</h4>
              <p className="md:text-md lg:text-lg 2xl:text-[24px] mt-1 text-white">
                Sell silver rounds, bars, or government-issued coins like Silver Eagles for instant cash based on live silver prices.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start lg:items-end">
          <div className="max-w-5xl">
            <h3 className="md:text-md lg:text-lg 2xl:text-[24px] font-semibold mb-2 text-white">
              Foreign & Vintage Coins
            </h3>
            <p className="md:text-md lg:text-lg 2xl:text-[24px] mb-6 text-white">
              From old European coins to international bullion, we evaluate and buy foreign coins of all types and conditions.
            </p>
            <div className="w-full h-48 sm:h-56 md:h-60 rounded overflow-hidden">
              <CustomImage
                src={imageSrc}
                alt="Antique Coin"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
