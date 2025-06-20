"use client";

import CustomImage from "./customImage";

const TwoImagesAndCenterText = ({
  title,
  description,
  textColor,
  leftImage,
  rightImage,
  leftTitleAttr = "",
  rightAltAttr = "",
  rightTitleAttr = "",
  leftAltAttr = "",
  backgroundColor = "",
}) => {
  return (
    <div className={`py-12 relative ${backgroundColor}`}>

      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 items-center">
        <div className="relative xl:top-[-10%]">
          <CustomImage
            srcAttr={leftImage}
            altAttr={leftAltAttr}
            titleAttr={leftTitleAttr}
            className="w-full xl:w-[100%]"
          />
        </div>

        <div className={`text-center xl:w-[130%] ${textColor} `}>
          <h2 className="text-2xl lg:text-5xl font-gelasio mb-4">{title}</h2>
          <p className="md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative xl:bottom-[-25%] flex justify-end">
          <CustomImage
            srcAttr={rightImage}
            altAttr={rightAltAttr}
            titleAttr={rightTitleAttr}
            className="w-full xl:h-auto xl:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoImagesAndCenterText;
