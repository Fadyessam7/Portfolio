import Slider from "react-slick";
import ServiceCard from "../components/ui/ServiceCard";
import { useEffect, useState } from "react";
import { services } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="w-11/12 md:w-2/3 mx-auto mt-12">
      <h1 className="font-bold text-5xl text-white text-center">Services</h1>
      <p className="text-gray-400 text-center mt-4 hidden md:block">
        As a Frontend Developer specializing in React.js, I build fast,
        responsive, and scalable web applications with a focus on clean code and
        intuitive user experiences.
      </p>

      {isMobile ? (
        <div className="mt-8">
          <Slider {...sliderSettings}>
            {services.map((service, idx) => (
              <div key={idx} className="flex justify-center ">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                >
                  <service.icon className="text-[#FD6F00] m-auto" size={48} />
                </ServiceCard>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex justify-center">
              <ServiceCard
                title={service.title}
                description={service.description}
              >
                <service.icon className="text-[#FD6F00] m-auto" size={48} />
              </ServiceCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
