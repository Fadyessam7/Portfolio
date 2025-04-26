import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import BackTopButton from "./components/ui/BackTopButton";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <BackTopButton />
    </>
  );
}

export default App;
