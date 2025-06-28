import Hero from "@/components/hero";
import herobg from "@/assets/images/what-we-buy/antiques/hero-bg.webp";
import Img1 from "@/assets/images/what-we-buy/antiques/img1.webp";
import Img2 from "@/assets/images/what-we-buy/antiques/img2.webp";
import Img3 from "@/assets/images/what-we-buy/antiques/img3.webp";
import Img4 from "@/assets/images/what-we-buy/antiques/img4.webp";
import Img5 from "@/assets/images/what-we-buy/antiques/img5.webp";
import Img6 from "@/assets/images/what-we-buy/antiques/img6.webp";
import featureImg1 from "@/assets/images/what-we-buy/antiques/img9.webp";
import featureImg from "@/assets/images/what-we-buy/antiques/img8.webp";
import featureImg2 from "@/assets/images/what-we-buy/antiques/img11.webp";
import featureImg3 from "@/assets/images/what-we-buy/antiques/img12.webp";
import antique1 from "@/assets/images/what-we-buy/antiques/img14.webp";
import antique2 from "@/assets/images/what-we-buy/antiques/img16.webp";
import antique3 from "@/assets/images/what-we-buy/antiques/img15.webp";
import antique4 from "@/assets/images/what-we-buy/antiques/img13.webp";
import antique5 from "@/assets/images/what-we-buy/antiques/img7.webp";
import AntiquesSwiper from "@/components/AntiquesSwiper";
import HeadingTitle from "@/components/HeadingTitle";
import { LinkButton } from "@/components/button";
import homePageStarIconFull from "@/assets/images/home-page/homePageStarIconFull.webp";
import CustomImage from "@/components/customImage";
import AlternatingFeatureBlock from "@/components/alternatingFeatureBlock";
import AntiquesGrid from "@/components/AntiquesGrid";

export default function Antiques() {

    const bestSellers = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
    ];

    const categoryData = {
        alternatingFeature: {
            title: "Antiques We’re Looking For",
            feature: [
                {
                    title: "Vintage Home Décor",
                    description:
                        "We buy old lamps, mirrors, vases, and unique décor pieces that add character and charm to any space.",
                    direction: "LTF",
                    imgSrc: featureImg1,
                    titleAttr: "Vintage Home Décor",
                    altAttr: "Vintage Home Décor",
                },
                {
                    title: "Antique Furniture Pieces",
                    description:
                        "From ornate dressers to handcrafted tables, we offer great value for well-preserved vintage and antique furniture.",
                    direction: "RTF",
                    imgSrc: featureImg,
                    titleAttr: "Antique Furniture Pieces",
                    altAttr: "Antique Furniture Pieces",
                },
                {
                    title: "Collectibles and Curiosities",
                    description:
                        "Sell rare finds like clocks, figurines, and decorative objects with historical or cultural value that collectors seek.",
                    direction: "LTF",
                    imgSrc: featureImg2,
                    titleAttr: "Collectibles and Curiosities",
                    altAttr: "Collectibles and Curiosities",
                },
                {
                    title: "Fine Art & Frames",
                    description:
                        "We purchase vintage paintings, prints, and framed artwork from all time periods, styles, and artistic backgrounds.",
                    direction: "RTF",
                    imgSrc: featureImg3,
                    titleAttr: "Fine Art & Frames",
                    altAttr: "Fine Art & Frames",
                },
            ],
        },
    };

    const categories = [
        { name: "Clocks", src: antique5 },
        { name: "Silverware", src: antique2 },
        { name: "Furniture", src: antique3 },
        { name: "Paintings", src: antique4 },
        { name: "Coins", src: antique1 },
    ];

    return (
        <>
            <Hero
                imageSrc={herobg}
                imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
                imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
                title="Where Antiques Meet Their Worth"
                description="From heirloom furniture to vintage collectibles, we offer expert evaluations and competitive offers—helping you turn meaningful antiques into maximum value, right here in the Rome area.."
            />
            <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-20">
                <HeadingTitle
                    sectionName="Unlock the Hidden Value of Antiques"
                    description="We buy antiques of all kinds, including vintage décor, furniture, collectibles, and heirlooms. Our experts provide honest evaluations, fair pricing, and a seamless process from appraisal to payment."
                />
                <AntiquesSwiper items={bestSellers} />
            </section>

            {categoryData.alternatingFeature ? (
                <section className="container px-10 md:px-14 xl:px-12 2xl:px-16 py-10">
                    <h3 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-gelasio leading-tight text-primary sm: mb-6 lg:mb-8 lg:py-12">
                        {categoryData.alternatingFeature.title}
                    </h3>
                    <div className="space-y-8 lg:space-y-24">
                        {categoryData.alternatingFeature.feature.map((feature, i) => (
                            <AlternatingFeatureBlock key={i} {...feature} />
                        ))}
                    </div>
                </section>
            ) : null}

            <AntiquesGrid categories={categories} />

            <section className="relative py-8 ">
                <div className="grid grid-cols-1 text-center py-20 w-[100%]">
                    <h2 className=" text-2xl md:text-4xl font-gelasio font-bold !leading-[2.5rem] py-2">
                        Pawn Star Rome For You
                    </h2>
                    <p className="md:!leading-[3.5rem]">
                        Your trusted pawn shop in Rome for gold, silver, electronics,
                        jewelry, and quick cash.
                    </p>
                    <div className="flex justify-center mt-2">
                        <LinkButton
                            href="what-we-buy"
                            className="w-fit animated-btn relative inline-block border border-white hover:border-primary py-2 !bg-primary text-white font-semibold text-lg rounded-lg overflow-hidden group"
                        >
                            <span className="relative z-10 transition-colors duration-400 group-hover:text-approxblack md:px-16 md:py-4 px-8 py-3 ">
                                View More
                            </span>
                        </LinkButton>
                    </div>
                </div>

                <div className="absolute inset-2 flex justify-center items-center p-4 w-[70%] md:w-[100%] md:translate-x-[42%] md:translate-y-[-10%] translate-x-[54%] translate-y-[-20%] ">
                    <CustomImage
                        src={homePageStarIconFull}
                        alt="Pawn Star Rome | Gold, Silver, Diamond"
                        title="Pawn Star Rome | Gold, Silver, Diamond"
                        priority
                        className=" w-[90%] h-[90%] object-contain"
                    />
                </div>
                <div className="absolute inset-2 flex justify-center items-center p-4 scale-x-[-1]  w-[70%] md:w-[100%] md:translate-x-[-43%] md:translate-y-[12%] translate-x-[-25%] translate-y-[20%] ">
                    <CustomImage
                        src={homePageStarIconFull}
                        alt="Pawn Star Rome | Gold, Silver, Diamond"
                        title="Pawn Star Rome | Gold, Silver, Diamond"
                        priority
                        className="w-[90%] h-[90%] object-contain"
                    />
                </div>
            </section>

        </>
    )
}