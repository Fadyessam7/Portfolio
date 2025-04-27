import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import BackTopButton from "./components/ui/BackTopButton";
import { motion, useScroll, useSpring } from "framer-motion";
import Skills from "./sections/Skills";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
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
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Skills></Skills>
      <BackTopButton />
    </>
  );
}

export default App;
