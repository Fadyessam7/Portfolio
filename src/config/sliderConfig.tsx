import React from "react";

const sliderConfig = (centerMode = false) => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode,
  autoplay: true,
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
});

export default sliderConfig;
