"use client";

import CustomImage from "./customImage";

const TwoImagesAndCenterText = ({
  title,
  description,
  textColor = "text-white",
  leftImage,
  rightImage,
  leftTitleAttr = "",
  rightAltAttr = "",
  rightTitleAttr = "",
  leftAltAttr = "",
  backgroundColor = "",
  backgroundImage = "", // ✅ background image prop
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ✅ Full background image (if any) */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${backgroundColor}`}
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage.src || backgroundImage})` }
            : {}
        }
      ></div>

      {/* ✅ Optional black overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 xl:grid-cols-3 gap-8 items-center z-10">
        {/* Left Image (optional) */}
        {leftImage ? (
          <div className="relative xl:top-[-10%]">
            <CustomImage
              srcAttr={leftImage}
              altAttr={leftAltAttr}
              titleAttr={leftTitleAttr}
              className="w-full rounded-2xl"
            />
          </div>
        ) : (
          <div /> // Maintain grid layout spacing
        )}

        {/* Center Text */}
        <div className={`text-center xl:w-[130%] ${textColor}`}>
          <h2 className="text-2xl lg:text-5xl font-gelasio mb-4">{title}</h2>
          <p className="md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Image (optional) */}
        {rightImage ? (
          <div className="relative xl:bottom-[-25%] flex justify-end">
            <CustomImage
              srcAttr={rightImage}
              altAttr={rightAltAttr}
              titleAttr={rightTitleAttr}
              className="w-full xl:w-[70%] rounded-2xl"
            />
          </div>
        ) : (
          <div /> // Maintain grid layout spacing
        )}
      </div>
    </div>
  );
};

export default TwoImagesAndCenterText;
