import Lottie from "lottie-react";
import loader from "@/assets/animations/loader.json";
import whiteLoader from "@/assets/animations/white-loader.json";

const Spinner = ({ color = "" }) => {
  const animationData = color === "white" ? whiteLoader : loader;

  return (
    <div>
      <Lottie
        loop={true}
        animationData={animationData}
        className="h-14 2xl:h-20 "
      />
    </div>
  );
};

export default Spinner;
