import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="fixed bottom-6 right-6 border rounded-md border-[#FD6F00] py-3 px-6 text-[#FD6F00] cursor-pointer hover:border-[#E46400] hover:text-[#E46400] transition-all duration-200"
        onClick={scrollToTop}
      >
        <ChevronUp />
      </button>
    )
  );
};

export default BackToTopButton;
