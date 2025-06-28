"use client";
import CustomImage from "@/components/customImage";
import watch1 from "@/assets/images/what-we-buy/watches/watch1.webp";
import watch2 from "@/assets/images/what-we-buy/watches/watch2.webp";
import watch3 from "@/assets/images/what-we-buy/watches/watch3.webp";
import watch4 from "@/assets/images/what-we-buy/watches/watch4.webp";
import watch5 from "@/assets/images/what-we-buy/watches/watch5.webp";
import watch6 from "@/assets/images/what-we-buy/watches/watch6.webp";
import watch7 from "@/assets/images/what-we-buy/watches/watch7.webp";
import watch8 from "@/assets/images/what-we-buy/watches/watch8.webp";

export default function WatchGalleryGrid() {
  const gridItems = [
    { id: 1, image: watch1 },
    { id: 2, image: watch2 },
    { id: 3, image: watch3 },
    { id: 4, image: watch4 },
    { id: 5, image: watch5 },
    { id: 6, image: watch6 },
    { id: 7, image: watch7 },
    { id: 8, image: watch8 },
  ];

  return (
    <section className="py-8 md:py-12 overflow-hidden flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center">
            <div className="lg:hidden w-full max-w-2xl">
              <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-[3/4] overflow-hidden rounded-lg"
                  >
                    <CustomImage
                      src={item.image}
                      alt={`Watch ${item.id}`}
                      title={`Watch ${item.id}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      priority={item.id <= 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-6 grid-rows-2 gap-4 h-[400px]">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch1}
                  alt="Watch 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch2}
                  alt="Watch 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch3}
                  alt="Watch 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch4}
                  alt="Watch 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch5}
                  alt="Watch 5"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch8}
                  alt="Watch 8"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch6}
                  alt="Watch 6"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
                <CustomImage
                  src={watch7}
                  alt="Watch 7"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
