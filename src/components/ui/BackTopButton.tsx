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
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white p-3 rounded-full shadow-lg hover:bg-[#FD6F00] cursor-pointer"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
