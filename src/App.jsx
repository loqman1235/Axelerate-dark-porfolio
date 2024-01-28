import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="absolute bg-[#301E67] blur-[140px] z-[-1] w-[328px] h-[328px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 move-animation"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
