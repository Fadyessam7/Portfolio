// components/ScrollIndicator.jsx
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "#FD6F00",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollIndicator;
