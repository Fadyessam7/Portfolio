import { motion } from "framer-motion";
import about_photo from "../assets/about_photo.png";

const About = () => {
  return (
    <div className="w-11/12 md:w-2/3 mx-auto mt-12 px-4" id="about">
      <div className="space-y-4">
        <h1 className="text-center text-white font-bold text-2xl md:text-5xl">
          About Me
        </h1>
        <p className="text-center text-gray-400 text-base md:text-2xl">
          Front-end Developer | React.Js | Redux
        </p>
      </div>
      {/* IMAGE */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          className="md:col-span-5 flex items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative w-60 h-56 md:w-80 md:h-72">
            {/* BACKGROUND */}
            <div className="w-full h-full rounded-t-full bg-white/10 overflow-hidden"></div>

            {/* IMAGE */}
            <img
              src={about_photo}
              alt="About Me"
              className="absolute bottom-17 md:bottom-23 left-1/2 w-64 md:w-80 h-auto -translate-x-1/2 translate-y-1/4 object-cover"
            />
          </div>
        </motion.div>
        {/* DESCRIPTION */}
        <motion.div
          className="md:col-span-7 text-center md:text-left text-gray-300 space-y-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-gray-400">
              Hello! I'm Fady Essam, a passionate Frontend Developer with a
              strong focus on building beautiful, fast, and user-friendly web
              applications. I specialize in modern technologies like React.js,
              TypeScript, and Tailwind CSS, always aiming to create seamless
              digital experiences. I believe that clean code, attention to
              detail, and user-centric design are the keys to building great
              products. I'm constantly learning and exploring new technologies
              to stay ahead in the ever-evolving world of web development. Let's
              build something amazing together!
            </p>

            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1Eq6lZFTXPB3is3n9OW1P-GdJCPVSuHwW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
