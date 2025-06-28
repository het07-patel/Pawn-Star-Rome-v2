import CustomImage from "./customImage";
import HeadingTitle from "./HeadingTitle";

const AntiquesGrid = ({ categories }) => {
  if (!categories || categories.length !== 5) {
    console.error("You must pass exactly 5 category items.");
    return null;
  }

  return (
    <div className="py-10 px-6">
      <HeadingTitle
        sectionName="Where History Meets Craftsmanship"
        headingClassName="mb-6"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Left Column (2 items stacked) */}
        <div className="flex flex-col gap-4">
          {categories.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="h-[250px] 2xl:h-[300px] w-full relative overflow-hidden rounded"
            >
              <CustomImage
                src={item.src}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-2 left-2 text-sm bg-black px-2 py-1 rounded">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="sm:h-[250px] md:h-[520px] lg:h-[520px] 2xl:h-[615px] w-full relative overflow-hidden rounded">
          <CustomImage
            src={categories[2].src}
            alt={categories[2].name}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-sm bg-black px-2 py-1 rounded">
            {categories[2].name}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {categories.slice(3).map((item, idx) => (
            <div
              key={idx}
              className="h-[250px] 2xl:h-[300px] w-full relative overflow-hidden rounded"
            >
              <CustomImage
                src={item.src}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-2 left-2 text-sm bg-black px-2 py-1 rounded">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AntiquesGrid;
