import Image from "next/image";
import React from "react";

const commonAltAttr =
  "Pawn Star Rome | Diamond Jewelry, Coin, Gold, Silver, Platinum";
const commonTitleAttr =
  "Pawn Star Rome | Diamond Jewelry, Coin, Gold, Silver, Platinum";

export default function CustomImage({
  altAttr = commonAltAttr,
  titleAttr = commonTitleAttr,
  srcAttr,
  width,
  height,
  className = "",
  ...rest
}) {
  return (
    <Image
      alt={altAttr || commonAltAttr}
      src={srcAttr}
      title={titleAttr || commonTitleAttr}
      width={width}
      height={height}
      className={className}
      {...rest}
    ></Image>
  );
}
