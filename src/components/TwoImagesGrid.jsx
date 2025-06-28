"use client";

import CustomImage from "@/components/customImage";
import HeadingTitle from "@/components/HeadingTitle";

export default function TwoMediaGrid({
    heading,
    description,
    leftType = "image", // "image" or "video"
    leftSrc,
    leftAlt = "",
    rightType = "image", // "image" or "video"
    rightSrc,
    rightAlt = "",
    aspect = "aspect-[4/3]", // default aspect ratio
}) {
    return (
        <section className="container py-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-8">
                {/* LEFT MEDIA */}
                <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl`}>
                    {leftType === "image" ? (
                        <CustomImage
                            src={leftSrc}
                            alt={leftAlt}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0">
                            <video
                                src={leftSrc}
                                controls
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    )}
                </div>

                {/* RIGHT MEDIA */}
                <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl`}>
                    {rightType === "image" ? (
                        <CustomImage
                            src={rightSrc}
                            alt={rightAlt}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0">
                            <video
                                src={rightSrc}
                                controls
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
