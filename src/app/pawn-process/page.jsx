import Image from "next/image";
import Hero from "@/components/hero";
import gradient from "@/assets/images/gradient.webp";
import img1 from "@/assets/images/pawn-process/image.webp";
import img2 from "@/assets/images/pawn-process/image-1.webp";
import img3 from "@/assets/images/pawn-process/image-2.webp";
import img4 from "@/assets/images/pawn-process/image-3.webp";
import count1 from "@/assets/images/pawn-process/count1.webp";
import count2 from "@/assets/images/pawn-process/count2.webp";
import count3 from "@/assets/images/pawn-process/count3.webp";
import count4 from "@/assets/images/pawn-process/count4.webp";
import AnimatedImgContainer from "@/components/img-animated-component";
import pawnProcessHero from "@/assets/images/pawn-process/pawnProcessHero.webp";

const data = [
  {
    img: count1,
    contentImg: img1,
    heading: "Bring Items",
    content:
      "Bring in your gold, silver, electronics, jewelry, or other valuables. Our team will carefully evaluate your items, ensuring you receive a fair and accurate appraisal for quick processing.",
    title: "Pawn Star Rome | Gold, Silver, Diamond",
    alt: "Pawn Star Rome | Gold, Silver, Diamond",
  },
  {
    img: count2,
    contentImg: img2,
    heading: "Get Offer",
    content:
      "Once your items are evaluated, we’ll provide a fair cash offer based on their value. Our transparent offers ensure you’re always informed and satisfied with the process before proceeding.",
    title: "Pawn Star Rome | Gold, Silver, Diamond",
    alt: "Pawn Star Rome | Gold, Silver, Diamond",
  },
  {
    img: count3,
    contentImg: img3,
    heading: "Get Cash",
    content:
      "Accept the offer and walk away with cash in hand. We offer quick payouts, providing you with immediate access to the funds you need without unnecessary delays or hidden fees.",
    title: "Pawn Star Rome | Gold, Silver, Diamond",
    alt: "Pawn Star Rome | Gold, Silver, Diamond",
  },
  {
    img: count4,
    contentImg: img4,
    heading: "Get Tickets",
    content:
      "Pawn your items with us and get tickets for special promotions or offers. Take advantage of exclusive discounts and deals as part of our loyal customer benefits program.",
    title: "Pawn Star Rome | Gold, Silver, Diamond",
    alt: "Pawn Star Rome | Gold, Silver, Diamond",
  },
];

const PawnProcess = () => {
  return (
    <div>
      <Hero
        imageSrc={pawnProcessHero}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Our Easy Pawn Process in Rome"
        description="Experience a simple and straightforward pawn process in Rome. Get fast cash, fair evaluations, and secure transactions for your valuables like gold, silver, and electronics."
      />
      <div className="relative z-[2] mt-20">
        <section className="px-4 text-center">
          <h2 className="text-2xl font-semibold leading-tight xxs:text-3xl xs:text-4xl sm:text-3xl lg:text-5xl  3xl:text-6xl font-gelasio">
            How Do <span className="text-primary">Pawn Loans </span>Work?
          </h2>
          <div className="flex justify-center">
            <p className="mt-4 text-sm xxs:text-base sm:text-lg lg:text-sm lg:w-[60%]">
              At our Rome pawn shop, getting a pawn loan is simple and fast.
              Bring in your valuables, including gold, silver, electronics,
              power tools, or antiques. Our expert team provides fair
              appraisals, and we use your items as collateral for quick loans.
              With flexible terms and secure transactions, we ensure a smooth
              experience every time. Get cash quickly and easily with our
              trusted pawn loan process.
            </p>
          </div>
        </section>

        <section className="my-8 sm:my-12 lg:my-20">
          {data?.map((x, i) => (
            <AnimatedImgContainer
              key={x?.heading}
              contentImg={x?.contentImg}
              img={x?.img}
              heading={x?.heading}
              content={x?.content}
              borderShow={data?.length !== i + 1}
            />
          ))}
        </section>

        {/* Background Gradient */}
        <div className="absolute left-0 top-0 z-[-1] h-full w-full">
          <Image
            src={gradient}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            className="relative z-[-1] h-full w-[200%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PawnProcess;
