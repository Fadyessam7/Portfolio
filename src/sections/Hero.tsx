import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import myPhoto from "../assets/MyPhoto.jpg";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row px-4 items-center w-11/12 md:w-10/12 mx-auto mt-21"
      id="hero"
    >
      {/* Content */}
      <motion.div
        className="flex-1 md:ml-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center space-y-4 md:text-left">
          <span className="text-gray-400 text-xl md:text-2xl block">
            Hi I am
          </span>
          <h2 className="text-gray-300 text-2xl md:text-4xl">Fady Essam</h2>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#984300] to-[#FD6F00] text-3xl md:text-5xl">
            Frontend Developer
          </h1>
        </div>
        {/* Social Media */}
        <div className="flex items-center justify-center md:justify-start space-x-6 mt-5 text-white">
          <a
            href="https://github.com/Fadyessam7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-10 w-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-black">
              <Github />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/fady-e-158a26247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-10 w-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-white hover:text-black">
              <Linkedin />
            </div>
          </a>
        </div>
        {/* Download CV */}
        <div className="flex justify-center items-center mt-8 md:justify-start">
          <a
            href="https://drive.google.com/file/d/1Eq6lZFTXPB3is3n9OW1P-GdJCPVSuHwW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 md:p-3 border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex items-center justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          className="w-60 md:w-72 h-60 md:h-80 rounded-full md:rounded-md object-cover"
          src={myPhoto}
          alt="My photo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
