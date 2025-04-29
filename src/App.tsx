import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import BackTopButton from "./components/ui/BackTopButton";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import { useEffect, useState } from "react";
import { Mosaic } from "react-loading-indicators";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!isLoading && <ScrollIndicator />}
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] z-50">
          <Mosaic
            color="#FD6F00"
            size="medium"
            text="Welcome To My Portfolio"
          />
        </div>
      ) : (
        <>
          <main>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Skills />
            <Projects />
          </main>
          <BackTopButton />
        </>
      )}
    </>
  );
}

export default App;
