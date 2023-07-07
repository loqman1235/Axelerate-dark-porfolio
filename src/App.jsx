import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="absolute bg-[#301E67] blur-[180px] z-[-1] w-[328px] h-[328px] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>

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
