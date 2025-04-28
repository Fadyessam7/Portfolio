import Slider from "react-slick";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResponsive from "../hooks/useResponsive";
import sliderConfig from "../config/sliderConfig";
import DotsStyle from "../components/ui/dotsStyle";

const Services = () => {
  const isMobile = useResponsive();

  const sliderSettings = sliderConfig();

  return (
    <div className="w-11/12 md:w-2/3 mx-auto mt-12">
      <style>{DotsStyle}</style>
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
