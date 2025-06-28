"use client";

import CustomImage from "./customImage";
import HeadingTitle from "./HeadingTitle";

export default function CoinsArticlesSection({ articles = [] }) {
  return (
    <section className="container p-10 md:p-14 xl:p-12 2xl:p-16">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <HeadingTitle
            sectionName="Fair Offers, Fast Cash"
            description="We buy a wide range of coins—from rare collectibles to everyday silver and gold. Bring them in for a fast, fair offer today."
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div key={item.id} className="relative group rounded-lg overflow-hidden">
              {/* Image */}
              <CustomImage
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white p-4 
                opacity-100 lg:opacity-0 group-hover:lg:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
