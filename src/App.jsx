import { useState, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
function App() {
  const [count, setCount] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const expertiseRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    console.log("Scrolling to section:", sectionRef.current);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <NavBar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToExpertise={() => scrollToSection(expertiseRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Home ref={homeRef} />
      <Expertise ref={expertiseRef} />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
