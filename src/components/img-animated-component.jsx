import Image from "next/image";

const AnimatedImgContainer = ({
  img,
  title = "",
  alt = "",
  heading = "",
  content = "",
  contentImg,
  borderShow = false,
}) => {
  return (
    <div className="w-full duration-300 group hover:bg-black/55 lg:min-h-[300px] min-h-[200px] sm:min-h-[250px] transition-all">
      <div className="flex flex-col p-4 w-full 3xl:w-[75%] duration-300 gap-6 items-center md:flex-row md:justify-between md:py-8 md:w-full mx-auto transition-all xl:gap-8 xl:p-10 xl:w-[85%]">
        {/* Left Content Section */}
        <div className="flex flex-col text-center w-full gap-4 items-center lg:flex-row md:gap-6 md:items-start md:text-left md:w-auto">
          {/* Count Image */}
          <div className="relative">
            <Image
              width={132}
              height={147}
              src={img}
              alt={alt}
              title={title}
              className="h-auto w-[100px] 3xl:w-[132px] object-contain sm:w-[80px] xl:w-[100px] xxs:w-[80px]"
            />
            {/* Vertical Dashed Border */}
            {borderShow && (
              <div
                className="w-0.5 3xl:h-[200px] absolute hidden left-[40%] lg:block lg:h-[250px] top-[120%]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.2) 50%, transparent 50%)",
                  backgroundSize: "15px 20px",
                }}
              />
            )}
          </div>

          {/* Text Content */}
          <div className="3xl:max-w-[700px] lg:max-w-[500px] max-w-full md:max-w-[400px]">
            <h6 className="text-2xl font-gelasio font-medium lg:mb-6 lg:text-[40px] sm:text-4xl xxs:text-3xl">
              {heading}
            </h6>
            <p className="text-sm mt-2 sm:text-lg xxs:text-base">{content}</p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="h-[200px] w-full lg:h-[300px] lg:w-[400px] max-w-[300px] md:h-full md:w-[300px] sm:h-[250px] sm:max-w-[350px]">
          <Image
            width={400}
            height={500}
            src={contentImg}
            alt={alt}
            title={title}
            className="h-full w-full object-contain transition-all duration-300 ease-linear
                       visible lg:group-hover:rotate-12 lg:group-hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedImgContainer;
