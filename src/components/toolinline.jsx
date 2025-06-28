"use client";
import CustomImage from "@/components/customImage";
import Tool1 from "@/assets/images/what-we-buy/electronic-and-tool/Img9.webp";
import Tool2 from "@/assets/images/what-we-buy/electronic-and-tool/Img10.webp";
import Tool3 from "@/assets/images/what-we-buy/electronic-and-tool/Img11.webp";
import Tool4 from "@/assets/images/what-we-buy/electronic-and-tool/Img12.webp";

export default function BestSellerSection() {
  const products = [
    {
      image: Tool1,
      title: "Premium Workshop Setup",
      shift: "lg:-translate-y-6",
    },
    {
      image: Tool2,
      title: "Complete Pawn Retail Display",
      shift: "lg:translate-y-8",
    },
    {
      image: Tool3,
      title: "Tool Clearance Cabinet",
      shift: "lg:-translate-y-6",
    },
    {
      image: Tool4,
      title: "Wall-Mounted Tool Station",
      shift: "lg:translate-y-8",
    },
  ];

  return (
    <section className="bg-black text-primary py-16 px-4 mb-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16">
          Precision Tool Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className={`text-center ${product.shift} transition-all`}>
              <CustomImage
                src={product.image}
                alt={product.title}
                className="w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover mb-3 rounded-xl"
              />
              <h3 className="text-sm sm:text-base font-semibold">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
