import {
  Blocks,
  Figma,
  MonitorSmartphone,
  Server,
  Settings,
  SquareActivity,
} from "lucide-react";
import ServiceCard from "../components/ui/ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-2/3 mx-auto mt-12">
      <h1 className="font-bold text-5xl text-white text-center">Services</h1>
      <p className="text-gray-400 text-center mt-4 hidden md:block">
        As a Frontend Developer specializing in React.js, I build fast,
        responsive, and scalable web applications with a focus on clean code and
        intuitive user experiences. From developing reusable components to
        integrating APIs and managing state with tools like Redux or Context
        API, I bring your ideas to life with modern React practices. Whether
        it's a single-page app or a complex UI, I ensure high performance,
        accessibility, and cross-device compatibility in every project.
      </p>
      <motion.div
        className="grid grid-cols-12 gap-4 mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServiceCard
          title="Responsive Web Application"
          description="Build responsive and adaptive UIs that deliver seamless experiences across all devices and screen sizes"
        >
          <MonitorSmartphone className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
        <ServiceCard
          title="Component-Based Architecture"
          description="Create reusable and modular React components that enhance scalability and maintainability of the codebase."
        >
          <Blocks className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
        <ServiceCard
          title="API Integration"
          description="Integrate RESTful APIs and third-party services to deliver dynamic and interactive web applications."
        >
          <Server className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
        <ServiceCard
          title="State Management"
          description="Manage application state using tools like Redux, Zustand, or Context API to ensure data consistency and performance."
        >
          <Settings className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
        <ServiceCard
          title="Performance & Optimization"
          description="Optimize React apps for faster load times, better UX, and smooth interactions through code splitting, lazy loading, and more."
        >
          <SquareActivity className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
        <ServiceCard
          title="UI/UX Implementation"
          description="Bring Figma or design mockups to life using Tailwind CSS, Material UI, and best front-end practices with pixel-perfect accuracy."
        >
          <Figma className="text-[#FD6F00] m-auto" size={48} />
        </ServiceCard>
      </motion.div>
    </div>
  );
};

export default Services;
