"use client";

import CustomImage from "./customImage";
import HeadingTitle from "./HeadingTitle";

export default function AntiquesCollection({ blogs = [] }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <HeadingTitle
                    sectionName="Where History Meets Craftsmanship"
                    headingClassName="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main blog (large) */}
          {blogs[0] && (
            <div className="md:col-span-2">
              <div className="w-full h-64 sm:h-72 md:h-96 overflow-hidden rounded">
                <CustomImage
                  src={blogs[0].imgSrc}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px] font-gelasio mt-1">
                {blogs[0].title}
              </h3>
              <p className="md:text-md lg:text-lg 2xl:text-[24px] mt-2">{blogs[0].desc}</p>
            </div>
          )}

          {/* Secondary blog (small) */}
          {blogs[1] && (
            <div>
              <div className="w-full h-40 sm:h-48 md:h-52 overflow-hidden rounded">
                <CustomImage
                  src={blogs[1].imgSrc}
                  alt={blogs[1].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px] font-gelasio mt-1">
                {blogs[1].title}
              </h3>
              <p className="md:text-md lg:text-lg 2xl:text-[24px] mt-2">{blogs[1].desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
