import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "../data";
import useResponsive from "../hooks/useResponsive";
import sliderConfig from "../config/sliderConfig";
import dotsStyle from "../components/ui/dotsStyle";

const Skills = () => {
  const isMobile = useResponsive();
  const sliderSettings = sliderConfig();

  return (
    <div id="skills" className="w-11/12 md:w-2/3 mx-auto mt-12 px-4">
      <style>{dotsStyle}</style>
      <h1 className="text-center text-white font-bold text-2xl md:text-5xl">
        Skills
      </h1>
      {isMobile ? (
        <div className="relative">
          <Slider {...sliderSettings} className="mx-auto w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="!flex items-center justify-center h-48"
              >
                <img
                  className="max-h-24 w-auto mx-auto object-contain"
                  src={skill.logo}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center h-20">
              <img
                className="h-full w-auto max-w-xs object-contain"
                src={skill.logo}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
