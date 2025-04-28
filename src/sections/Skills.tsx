import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "../data";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          bottom: "-30px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#FD6F00",
          opacity: "0.5",
          transition: "all 0.3s ease",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div id="skills" className="w-11/12 md:w-2/3 mx-auto mt-12 px-4">
      <style>{`
        .slick-dots.custom-dots li.slick-active div {
          opacity: 1 !important;
          background-color: #FD6F00 !important;
        }
        .slick-dots.custom-dots li:hover div {
          opacity: 0.8 !important;
        }
      `}</style>
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
