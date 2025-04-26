import ServiceCard from "../components/ui/ServiceCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { services } from "../data";

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

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free", // smoother scroll
    rubberband: true, // more smooth
    slides: {
      perView: 1,
      spacing: 15,
    },
    drag: true,
  });

  return (
    <div className="w-11/12 md:w-2/3 mx-auto mt-12">
      <h1 className="font-bold text-5xl text-white text-center">Services</h1>
      <p className="text-gray-400 text-center mt-4 hidden md:block">
        As a Frontend Developer specializing in React.js, I build fast,
        responsive, and scalable web applications with a focus on clean code and
        intuitive user experiences.
      </p>

      {isMobile ? (
        <div ref={sliderRef} className="keen-slider mt-8">
          {services.map((service, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <ServiceCard
                title={service.title}
                description={service.description}
              >
                <service.icon className="text-[#FD6F00] m-auto" size={48} />
              </ServiceCard>
            </div>
          ))}
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
